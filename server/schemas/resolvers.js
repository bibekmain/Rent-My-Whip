const { AuthenticationError } = require("apollo-server-express");
const { User, Car } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

//TODO: replace all the categories and products stuff with our own queries
const resolvers = {
  Query: {
    allCars: async (parent, args, context) => {
      const cars = await Car.find();
      return cars;
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      if (!user) {
        return;
      }
      const token = signToken(user);
      return { token, user };
    },
    saveCar: async (parent, { carData }, context) => {
      if (!context.user) {
        throw new Error("Authentication required");
      }
      try {
        const newCar = {
          ...carData,
        };
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { cars: newCar } },
          { new: true, runValidators: true }
        );
        if (!updatedUser) {
          throw new Error("User not found");
        }
        return updatedUser;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    removeCar: async (parent, { carId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { cars: { carId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;

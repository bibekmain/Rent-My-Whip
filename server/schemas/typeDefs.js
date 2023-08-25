const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    cars: [Car]
  }

  type Car {
    carId: ID!
    price: Int!
    make: String!
    model: String!
    year: Int!
    doors: Int
    ac: Boolean
    transmission: String
    fuel: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    allCars: [Car]
  }

  input CarDataInput {
    carId: String!
    price: Int!
    make: String!
    model: String!
    year: Int!
    doors: Int
    ac: Boolean
    transmission: String
    fuel: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveCar(carData: CarDataInput): User
    removeCar(carId: ID!): User
  }
`;

module.exports = typeDefs;

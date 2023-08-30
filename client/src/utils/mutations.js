import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_CAR = gql`
  mutation Mutation($carData: CarDataInput) {
    saveCar(carData: $carData) {
      _id
      username
      email
      cars {
        price
        make
        model
        year
        doors
        ac
        transmission
        fuel
      }
    }
  }
`;
export const REMOVE_CAR = gql`
  mutation Mutation($carId: ID!) {
    removeCar(carId: $carId) {
      _id
      username
      email
      cars {
        price
        make
        model
        year
        doors
        ac
        transmission
        fuel
      }
    }
  }
`;

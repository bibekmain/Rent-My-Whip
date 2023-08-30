import { gql } from "@apollo/client";

export const GET_ALLCARS = gql`
  {
    allCars {
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
`;

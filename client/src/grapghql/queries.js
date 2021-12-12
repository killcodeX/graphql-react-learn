import { gql } from "@apollo/client";

export const LOAD_ALL_LAUNCHES = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
    }
  }
`;

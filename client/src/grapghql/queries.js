import { gql } from "@apollo/client";

export const LOAD_ALL_LAUNCHES = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;


export const LOAD_ALL_ROCKETS = gql`
query RocketQuery {
  rockets {
    flight_number
    mission_name
    launch_year
    launch_date_local
    launch_success
  }
}
`;
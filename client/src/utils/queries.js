import { gql } from '@apollo/client';

export const QUERY_DESTINATIONS = gql`
  user(username: $username) {
    email
    destinations {
      destination
      presentLocation
    }
  }
`;
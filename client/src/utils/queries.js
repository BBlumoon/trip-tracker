import { gql } from '@apollo/client';

export const QUERY_DESTINATIONS = gql`
query ExampleQuery($username: String!) {
  user(username: $username) {
    destinations {
      destination
      presentLocation
    }
  }
}
`;
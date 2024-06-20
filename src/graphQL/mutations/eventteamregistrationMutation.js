import { gql } from '@apollo/client';

export const CREATE_TEAM_REGISTRATION = gql`
  mutation CreateUser($input: EventTeamRegistrationCreateInput!) {
    createEventRegistration(input: $input) {
      EventId
      TeamName
      userId
    }
  }
`;

import { gql } from '@apollo/client';

export const CREATE_REGISTRATION = gql`
  mutation CreateUser($input: EventRegistrationCreateInput!) {
    createEventRegistration(input: $input) {
      EventId
      userId
    }
  }
`;

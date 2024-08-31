import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($tech1: String!, $tech2: String!) {
    loginUser(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($tech1: String!, $tech2: String!) {
    addUser(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($tech1: String!, $tech2: String!) {
    saveBook(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($tech1: String!, $tech2: String!) {
    removeBook(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;
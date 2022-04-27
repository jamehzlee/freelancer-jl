import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation userAdd(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    userAdd(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation UserAdd($id: ID!) {
    userDelete(id: $id) {
      _id
    }
}
`

export const ADD_JOB = gql`
  mutation JobAdd($name: String!, $description: String!, $price: Float!, $category: ID!) {
    jobAdd(name: $name, description: $description, price: $price, category: $category) {
      _id
      price
      description
      name
      category {
        _id
        name
      }
    }
  }
`
export const UPDATE_JOB = gql`
  mutation JobUpdate($jobUpdateId: ID!, $name: String, $description: String, $price: Float) {
    jobUpdate(id: $jobUpdateId, name: $name, description: $description, price: $price) {
      _id
      name
      description
      price
      category {
        _id
        name
      }
    }
  }
`
export const DELETE_JOB = gql`
  mutation JobDelete($jobDeleteId: ID!) {
    jobDelete(id: $jobDeleteId) {
      _id
      name
      description
      price
      category {
        _id
        name
      }
    }
  }
`
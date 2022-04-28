import { gql } from "@apollo/client";

export const QUERY_CATEGORIES = gql`
  query {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_JOB = gql`
  query Job($jobId: ID!) {
    job(jobID: $jobId) {
      _id
      name
      description
      price
      category {
        _id
        name
      }
      user {
        _id
        firstName
        lastName
        email
        password
      }
    }
  }
`;

export const QUERY_JOBS_BY_CATEGORY = gql`
  query JobsByCategory($category: ID) {
    jobsByCategory(category: $category) {
      _id
      description
      price
      name
      category {
        name
        _id
      }
      user {
        _id
        firstName
        lastName
        email
        password
      }
    }
  }
`;

export const QUERY_USER = gql`
  query User {
    user {
      _id
      firstName
      lastName
      email
    }
  }
`;

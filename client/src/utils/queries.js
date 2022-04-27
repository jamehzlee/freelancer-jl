import { gql } from "@apollo/client";

export const QUERY_CATERGORIES = gql`
  query categories 
  {
    _id
    name
   }
  
`;

export const QUERY_SINGLE_JOB = gql`
  query Jobs($jobId: ID!) 
  {
    job(jobID: $jobId) 
    {
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
      }
    }
  }
`;

export const QUERY_ALL_JOBS = gql`
  query Jobs($category: ID, $name: String)
  {
    jobs(category: $category, name: $name)
    {
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

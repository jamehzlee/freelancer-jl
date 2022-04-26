const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Job {
    _id: ID
    name: String
    description: String
    price: Float
    category: Category
    user: User
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    job(jobID: ID!): Job
    jobs(category: ID, name: String): [Job]
    product(_id: ID!): Job
    user: User
  }

  type Mutation {
    userAdd(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    userUpdate(firstName: String, lastName: String, email: String, password: String): User
    userDelete(id: ID!): User
    jobAdd(name: String!, description: String!, price: Float!, category: ID!): Job
    jobUpdate(id: ID!, name: String, description: String, price: Float): Job
    jobDelete(id: ID!): Job
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

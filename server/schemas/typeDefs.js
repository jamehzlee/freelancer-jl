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
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    jobs(category: ID, name: String): [Job]
    product(_id: ID!): Job
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(jobs: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateJob(_id: ID!, quantity: Int!): Job
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

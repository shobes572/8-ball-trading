const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Stock {
    ticker: String
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
    user: User
    stock: Stock
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, alpacaKey: String, alpacaSecret: String): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String, alpacaKey: String, alpacaSecret: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

'use strict';

const GraphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema
} = GraphQL;

// importing qurey file
const PostQuery = require('./queries/Post');

// lets define ou root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'This is the default root query provided by our application',
    fields: {
      posts: PostQuery.index(),
    },
});

// exprting the schema
module.exports = new GraphQLSchema({
  query: RootQuery
});

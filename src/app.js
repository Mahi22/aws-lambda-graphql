'use strict';

const express = require('express');
const body_parser = require('body-parser');

const expressGraphQL = require('express-graphql');

const GraphQLSchema = require('./graphql/schema');

const app = express();

app.use( body_parser.json({ limit: '50mb' }) );

app.use(
  '/',
  expressGraphQL( () => {
    return {
      graphiql: true,
      schema: GraphQLSchema,
    };
  })
);

module.exports = app;

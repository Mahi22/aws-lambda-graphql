'user strict';

const GraphQL = require('graphql');
const {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} = GraphQL;

// importing Post type
const PostType = require('../types/Post');

const PostResolver = require('../resolvers/Post');


module.exports = {
  index() {
    return {
      type: new GraphQLList(PostType),
      description: 'This will return all the posts we find in the given subreddit.',
      args: {
        subreddit: {
          type: GraphQLString,
          description: 'Please enter subreddit name',
        }
      },
      resolve(parent, args, context, info) {
        return PostResolver.index(args);
      }
    }
  }
};

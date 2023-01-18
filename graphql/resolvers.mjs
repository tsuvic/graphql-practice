const resolvers = {
  Query: {
    posts: () => [
      { id: 1, title: 'Hello World', votes: 0, author: 1 },
      { id: 2, title: 'GraphQL Rocks', votes: 0, author: 1 },
    ],
    author: (root, { id }, context) => {
      return { id: 1, firstName: 'John', lastName: 'Doe' }
    },
  },
  Mutation: {
    upvotePost: (root, { postId }, context) => {
      // update the votes for the post with id = postId
    }
  },
  Author: {
    posts: (author) => {
      // return all posts written by this author
    }
  }
};


export default resolvers

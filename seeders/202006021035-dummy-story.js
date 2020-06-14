"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Async Action Creators - Redux Thunk",
          content: `Finally, how do we use the synchronous action creators we defined earlier together with network requests? The standard way to do it with Redux is to use the Redux Thunk middleware. It comes in a separate package called redux-thunk. We'll explain how middleware works in general later; for now, there is just one important thing you need to know: by using this specific middleware, an action creator can return a function instead of an action object. This way, the action creator becomes a thunk.`,
          imageUrl: "https://miro.medium.com/max/2880/1*QERgzuzphdQz4e0fNs1CFQ.gif",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
        
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};

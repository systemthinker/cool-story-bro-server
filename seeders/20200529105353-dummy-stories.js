"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "teststory",
          content: "bladiebla2",
          imageUrl: "image.png",
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

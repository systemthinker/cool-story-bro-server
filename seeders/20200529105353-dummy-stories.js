"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "teststory",
          content: "bladafssdfcocodbla2",
          imageUrl: "image.png",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        name: "test2story",
          content: "bladiasdfla2",
          imageUrl: "image.png",
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        name: "test3story",
          content: "bladiebla24",
          imageUrl: "image.png",
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        name: "test4story",
          content: "bladiexxx",
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

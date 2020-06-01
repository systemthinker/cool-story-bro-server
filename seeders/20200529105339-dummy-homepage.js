"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "testhomepage",
          description: "bladiebla",
          backgroundColor: "#123456",
          color: "#4567889",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "homepageEpic",
          description: "bladieblaplusblaat",
          backgroundColor: "#126666",
          color: "#4599989",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  },
};

"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "My Homepage",
          description: `I'm Robbert van den Outenaar, a front-end software engineer focused on great customer interfaces & experiences. 
          I'm currently an Engineer at Coidasseur and learning web development with some awesome people. I recently worked at Robidus a Social Security company in Zaandam as an absenteeism consultant.

          As a software engineer, I enjoy building applications that are scalable and efficient while providing great user experiences. Building new and improving current projects gives me a ton of joy.

          When I'm not in front of a computer screen, I'm probably going out in Amsterdam, traveling to different parts of the world, or hiking across the beautiful Dutch landscapes.
          
          `,
          backgroundColor: "#dcf2ee",
          color: "#4567889",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "This is my Dummy Homepage",
          description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
          backgroundColor: "#f7f3d0",
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

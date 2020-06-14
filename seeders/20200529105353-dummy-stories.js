"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "GraphQL",
          content: `GraphQL is a declarative data fetching specification and query language for APIs. It was created by Facebook. GraphQL is an effective alternative to REST, as it was created to overcome some of the shortcomings of REST like under/over fetching.

          Unlike REST, GraphQL uses one endpoint. This means we make one request to the endpoint and we’ll get one response as JSON. This JSON response can contain as little or as much data as we want. Like REST, GraphQL can be operated over HTTP, though GraphQL is protocol agnostic.
          `,
          imageUrl: "https://graphql.org/img/og_image.png",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        name: "TypeScript",
          content: `TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript.[4] As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.`,
          imageUrl: "https://pantheon.io/sites/default/files/field/image/TypeScriptImage.jpeg",
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        name: "Jest, delightful Javascript Testing",
          content: `Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

          It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!`,
          imageUrl: "https://cdn-media-1.freecodecamp.org/images/1*0jCUKud4CkbbmNrFDzIQZw.png",
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        name: "Animations",
          content: `You can make some pretty dazzling text effects with basic CSS and a few lines of JavaScript. These effects range from text display animations to 3D rotations or anything else you can imagine.`,
          imageUrl: "https://miro.medium.com/max/2100/1*e_Loq49BI4WmN7o9ItTADg.gif",
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

'use strict';
module.exports = (sequelize, DataTypes) => {
  const story = sequelize.define('story', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    homepageId: {
      type:DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  story.associate = function(models) {
    // associations can be defined here
  };
  return story;
};
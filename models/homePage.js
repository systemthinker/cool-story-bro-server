'use strict';
module.exports = (sequelize, DataTypes) => {
  const homePage = sequelize.define('homePage', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    backgroundColor: { 
      type: DataTypes.STRING, 
      default: '#ffffff',
        },
    color: {
      type: DataTypes.STRING,
      default: '#000000',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  homepage.associate = function(models) {
    homepage.belongsTo(models.user)
  };
  return homePage;
};
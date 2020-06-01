'use strict';
module.exports = (sequelize, DataTypes) => {
  const homepage = sequelize.define('homepage', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

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
    homepage.hasMany(models.story)
  };
  return homepage;
};
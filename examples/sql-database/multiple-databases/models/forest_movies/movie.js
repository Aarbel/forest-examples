'use strict';

module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define('movie', {
    title: { type: DataTypes.STRING },
    full_plot: { type: DataTypes.STRING }
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'movies',
    underscored: true
  });

  return Model;
};


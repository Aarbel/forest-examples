'use strict';

module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define('chef', {
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING }
  }, {
    tableName: 'chefs',
    underscored: true
  });

  Model.associate = (models) => {
    Model.hasMany(models.chef_availability);
  };

  return Model;
};


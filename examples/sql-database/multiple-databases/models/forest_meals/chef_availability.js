'use strict';

module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.define('chef_availability', {
    available_at: { type: DataTypes.DATE },
  }, {
    tableName: 'chef_availabilities',
    underscored: true,
    timestamps: false
  });

  Model.associate = (models) => {
    Model.belongsTo(models.chef);
  };

  return Model;
};

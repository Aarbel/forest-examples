'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('orders', {
    delivery_address: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'orders',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.customers);
  };

  return Model;
};

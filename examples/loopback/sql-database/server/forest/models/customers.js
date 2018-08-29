'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('customers', {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    stripe_id: {
      type: DataTypes.STRING,
    },
    bulk_action_started_by: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'customers',
    underscored: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
    Model.hasMany(models.orders);
  };

  return Model;
};

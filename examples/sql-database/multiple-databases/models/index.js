const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

let dbs = [{
  name: 'forest_movies',
  connectionString: process.env.DATABASE1_URL
}, {
  name: 'forest_meals',
  connectionString: process.env.DATABASE2_URL
}];


let sequelize = {};
let db = {};
let models = {};

dbs.forEach((info) => {
  models[info.name] = {};

  let databaseOptions = {
    logging: console.log,
    pool: { maxConnections: 10, minConnections: 1 },
    dialectOptions: {}
  };

  if (process.env.SSL_DATABASE) {
    databaseOptions.dialectOptions.ssl = true;
  }

  if (process.env.ENCRYPT_DATABASE) {
    databaseOptions.dialectOptions.encrypt = true;
  }


  let connection = new Sequelize(info.connectionString, databaseOptions);
  sequelize[info.name] = connection;

  fs
    .readdirSync(path.join(__dirname,info.name))
    .filter(function (file) {
      return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function (file) {
      try {
        var model = connection['import'](path.join(__dirname, info.name, file));
        sequelize[model.name] = model;
        models[info.name][model.name] = model;
      } catch (error) {
        console.error('Model creation error: ' + error);
      }
    });

  Object.keys(models[info.name]).forEach(function(modelName) {
    if ('associate' in models[info.name][modelName]) {
      models[info.name][modelName].associate(sequelize[info.name].models);
    }
  });
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;

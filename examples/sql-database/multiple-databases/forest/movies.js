const Liana = require('forest-express-sequelize');

Liana.collection('movies', {
  actions: [{
    name: 'Mark as featured'
  }],
});

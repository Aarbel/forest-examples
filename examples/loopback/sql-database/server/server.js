'use strict';
require('dotenv').load();

var dbConnection = require('./forest/models').sequelize;
var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

// Initialize Forest
app.use(require('forest-express-sequelize').init({
  envSecret: process.env.FOREST_ENV_SECRET, // TO ADAPT
  authSecret: process.env.FOREST_AUTH_SECRET, // TO ADAPT
  sequelize: require('sequelize'),
  connections: [dbConnection],
  configDir: `${__dirname}/forest` // TO ADAPT
}));

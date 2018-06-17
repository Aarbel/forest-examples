const express = require('express');
const router = express.Router();
const Liana = require('forest-express-sequelize');
const models = require('../models');

router.post('/actions/mark-as-featured', Liana.ensureAuthenticated,
  (req, res) => {
    const dbMovies = models.sequelize.forest_movies.models;
    const dbMeals = models.sequelize.forest_meals.models;

    // dbMovies.movie.findAll(...);
    // dbMeals.chef.findAll(...);
});

module.exports = router;

const models = require('../models/recipeModels');
const recipeController = {};

recipeController.getRecipe = (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    models.Recipe.find({})
      .then((recipe) => {
        res.locals.recipe = recipe;
        return next();
      })
      .catch((err) => {
        return next({
          log: `recipeController.getRecipe: ERROR: ${err}`,
          message: {
            err: 'Error occurred. Check server logs for more details.',
          },
        });
      });
  } else
    models.Recipe.find({
      name: name,
    })
      .then((recipe) => {
        res.locals.recipe = recipe;
        return next();
      })
      .catch((err) => {
        return next({
          log: `recipeController.getRecipe: ERROR: ${err}`,
          message: {
            err: 'Error occurred. Check server logs for more details.',
          },
        });
      });
};

recipeController.addRecipe = (req, res, next) => {
  const { name, category, directions, ingredients, notes } = req.body;
  models.Recipe.create({
    name,
    category,
    directions,
    ingredients,
    notes,
  })
    .then((recipe) => {
      res.locals.recipe = recipe;
      return next();
    })
    .catch((err) => {
      return next({
        log: `recipeController.addRecipe: ERROR: ${err}`,
        message: {
          err: 'Error occurred. Check server logs for more details.',
        },
      });
    });
};

recipeController.countRecipes = (req, res, next) => {
  models.Recipe.countDocuments({})
    .then((number) => {
      res.locals.recipes = number;
      return next();
    })
    .catch((err) => {
      return next({
        log: `recipeController.countRecipes: ERROR: ${err}`,
        message: {
          err: 'Error occurred. Check server logs for more details.',
        },
      });
    });
};

recipeController.modifyRecipe = (req, res, next) => {
  const { id } = req.query;
};

recipeController.deleteRecipe = (req, res, next) => {
  const { id } = req.params;
  models.Recipe.findOneAndDelete({
    _id: id,
  })
    .then((val) => {
      res.locals.recipe = val;
      console.log(val);
      return next();
    })
    .catch((err) => {
      return next({
        log: `recipeController.deleteRecipe: ERROR: ${err}`,
        message: {
          err: 'Error occurred. Check server logs for more details.',
        },
      });
    });
};

module.exports = recipeController;

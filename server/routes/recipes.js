const express = require('express');

const recipeController = require('../controllers/recipeController');

const router = express.Router();

router.get('/number', recipeController.countRecipes, (req, res) =>
  res.status(200).json(res.locals.recipes)
);

router.get('/', recipeController.getRecipe, (req, res) =>
  res.status(200).json(res.locals.recipe)
);

router.post('/', recipeController.addRecipe, (req, res) =>
  res.status(200).json(res.locals.recipe)
);

router.patch('/', recipeController.modifyRecipe, (req, res) =>
  res.status(200).json(res.locals.recipe)
);

router.delete('/:id', recipeController.deleteRecipe, (req, res) =>
  res.status(200).json(res.locals.recipe)
);

module.exports = router;

import React, { useState, useEffect } from 'react';
import Recipe from './Recipe.jsx';
import NavigationBar from './NavigationBar.jsx';
import AddRecipe from './AddRecipe.jsx';

// need to query the database and render the number of recipes based on how many items there are in the model
// so this is stateful--should pass relevant info down to recipes via props

const RecipeBox = () => {
  // STATE HOOKS
  const [recipeBox, updateRecipes] = useState([]);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [directions, setDirections] = useState('');
  const [ingredientInputs, setIngredientInputs] = useState([
    { ingredient: '', quantity: '' },
  ]);
  const [notes, setNotes] = useState('');

  // FUNCTION THAT UPDATES APP FROM DB
  const fetchAndUpdateRecipes = async () => {
    const data = await fetch('/recipes');
    const recipes = await data.json();
    updateRecipes(recipes);
  };
  // FUNCTION THAT HANDLES DELETE BUTTON
  const handleDeleteClick = async (e) => {
    const id = e.target.id;
    try {
      const response = await fetch(`/recipes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const deletedRecipe = await response.json();
      console.log(deletedRecipe);
      fetchAndUpdateRecipes();
    } catch (err) {
      console.log('Error in handleDeleteClick', err);
    }
  };
  // FUNCTION THAT HANDLES EDIT BUTTON
  const handleEditClick = (e) => {};

  // FUNCTIONS THAT HANDLE ADD RECIPE
  const handleAddRecipe = async (e) => {
    e.preventDefault();

    const ingredientsArray = ingredientInputs.map((input) => [
      input.ingredient,
      input.quantity,
    ]);

    const newRecipe = {
      name,
      category,
      directions,
      ingredients: ingredientsArray,
      notes,
    };
    try {
      await fetch('/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      });
    } catch (err) {
      console.log('Error in newRecipe', err);
    }
    fetchAndUpdateRecipes();
  };

  const handleIngredients = (index, field, value) => {
    const updatedIngredients = [...ingredientInputs];
    updatedIngredients[index][field] = value;
    setIngredientInputs(updatedIngredients);
  };

  const addIngredientInput = () => {
    setIngredientInputs([
      ...ingredientInputs,
      { ingredient: '', quantity: '' },
    ]);
  };

  // USE EFFECT CALL ON INITIAL PAGE RENDER
  useEffect(() => {
    fetchAndUpdateRecipes();
  }, []);

  return (
    <div className='recipe-box'>
      <h1 className='recipe-header'>Recipe Box</h1>
      <div id='navbar'>
        <NavigationBar />
      </div>
      <div className='recipe-holder'>
        {recipeBox.map(
          ({ name, category, directions, ingredients, notes, _id }) => {
            return (
              <Recipe
                name={name}
                category={category}
                key={_id}
                id={_id}
                directions={directions}
                ingredients={ingredients}
                notes={notes}
                handleDeleteClick={handleDeleteClick}
              />
            );
          }
        )}
      </div>
      <div>
        <AddRecipe
          name={name}
          category={category}
          directions={directions}
          ingredientInputs={ingredientInputs}
          notes={notes}
          handleAddRecipe={handleAddRecipe}
          handleIngredients={handleIngredients}
          addIngredientInput={addIngredientInput}
          setCategory={setCategory}
          setDirections={setDirections}
          setIngredientInputs={setIngredientInputs}
          setNotes={setNotes}
          setName={setName}
        />
      </div>
    </div>
  );
};

export default RecipeBox;

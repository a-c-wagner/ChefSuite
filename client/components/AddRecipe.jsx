import React from 'react';

const RecipeForm = (props) => {
  const {
    handleAddRecipe,
    handleIngredients,
    addIngredientInput,
    name,
    category,
    directions,
    ingredientInputs,
    notes,
    setName,
    setCategory,
    setDirections,
    setNotes,
  } = props;

  return (
    <div className='add-recipe'>
      <div>
        <h2>Add Recipe</h2>
      </div>
      <form onSubmit={handleAddRecipe}>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type='text'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <label>
          Directions:
          <input
            type='text'
            value={directions}
            onChange={(e) => setDirections(e.target.value)}
          />
        </label>
        <br />
        <div>
          <label>Ingredients: </label>
          {ingredientInputs.map((input, index) => (
            <div key={index}>
              <input
                type='text'
                placeholder='Ingredient'
                value={input.ingredient}
                onChange={(e) =>
                  handleIngredients(index, 'ingredient', e.target.value)
                }
              />
              <input
                type='text'
                placeholder='Quantity'
                value={input.quantity}
                onChange={(e) =>
                  handleIngredients(index, 'quantity', e.target.value)
                }
              />
            </div>
          ))}
          <button type='button' onClick={addIngredientInput}>
            Add Ingredient
          </button>
        </div>
        <br />
        <label>
          Notes:
          <input
            type='text'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>
        <br />
        <button type='submit'>Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;

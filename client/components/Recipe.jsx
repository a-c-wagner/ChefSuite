import React, { useState } from 'react';
import '../scss/application.scss';

// needs to display the recipe fetched from the database
// the whole image should be a button that zooms in?
// needs to have an edit button
// needs to have a delete button

const Recipe = (props) => {
  const [expanded, setExpanded] = useState(false);

  const {
    name,
    category,
    directions,
    ingredients,
    notes,
    id,
    handleDeleteClick,
  } = props;

  const toggleExpandedRecipe = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className='recipe-card'>
      <button
        className={`recipe-button ${expanded ? 'expanded' : ''}`}
        onClick={toggleExpandedRecipe}
      >
        <div className='button-content'>
          <h3>{name.toUpperCase()}</h3>
          <h4>{`Category: ${category}`}</h4>
          <div>
            <p>{`Ingredients:`}</p>
            <ul className='ingredient-list'>
              {ingredients.map((el, i) => (
                <li
                  className='ingredient-item'
                  key={i}
                >{`${el[0]}: ${el[1]}`}</li>
              ))}
            </ul>
          </div>
          <p>
            {`Directions: `}
            <br />
            {`${directions}`}
          </p>
          <p>{`Notes: ${notes}`}</p>
        </div>
      </button>
      <button className='edit-button'>Edit</button>
      <button className='delete-button' onClick={handleDeleteClick} id={id}>
        Delete
      </button>
    </div>
  );
};

export default Recipe;

import React from 'react';
import '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/import.macro';

const NavigationBar = () => {
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Search Recipes"></input>
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default NavigationBar;

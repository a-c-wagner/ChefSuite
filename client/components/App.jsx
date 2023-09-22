import React from 'react';
import '../scss/application.scss';

import RecipeBox from './RecipeBox.jsx';

const App = () => {
  return (
    <div id="app-box">
      <div id="recipebox">
        <RecipeBox />
      </div>
    </div>
  );
};

// const root = createRoot(document.querySelector('#root'));
// root.render(<App />);

export default App;

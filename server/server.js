const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// require routers
const recipeRouter = require('./routes/recipes');

// parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files?

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.use('/build', express.static(path.join(__dirname, '../build')));

// define route handlers
app.use('/recipes', recipeRouter);

app.use((req, res) =>
  res
    .status(404)
    .send("I'm sorry, but we can't find the page you're looking for!")
);

// express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {
      err: 'This is the express global error handler, letting you know an error has occurred. Have a great day!',
    },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;

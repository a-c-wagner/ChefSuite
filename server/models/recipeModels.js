const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://andrewclarkwagner:qZa427X7NbIsGcY4@recipe-cluster.44ng7qn.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'recipes',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  category: String,
  directions: String,
  ingredients: Array,
  notes: String,
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = {
  Recipe,
};

const mongoose = require("mongoose");
const data = require("./data.js");
const Recipe = require("./Recipe");

mongoose.connect("mongodb://localhost/recipeApp");


Recipe.insertMany(data)
  .then(result => {
    console.log(result);
    return Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 },
      { new: true }
    )
  })
  .then(result => {
    return Recipe.remove({ title: "Carrot Cake" })
  })
  .then(result => {
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

const db = require("../data/config");

const findRecipesWith = (ingredient_id) => {
  return db("recipes AS R")
    .join("measurements AS M", "M.recipe_id", "R.id")
    .join("ingredients AS I", "M.ingredient_id", "I.id")
    .where("I.id", ingredient_id)
    .select("R.name");
};

module.exports = {
  findRecipesWith,
};

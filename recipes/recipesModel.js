const db = require("../data/config");

const getRecipes = () => {
  return db("recipes");
};
const getShoppingList = (recipe_id) => {
  return db("measurements AS M")
    .join("units AS U", "U.id", "M.unit_id")
    .join("ingredients AS I", "I.id", "M.ingredient_id")
    .select("I.name", "M.quantity", "U.unit")
    .where("M.recipe_id", recipe_id);
};
const getInstructions = (recipe_id) => {
  return db("steps").select("step_num", "step").where({ recipe_id });
};

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

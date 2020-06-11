exports.seed = function (knex) {
  return knex("measurements").insert([
    { quantity: 5, unit_id: 3, recipe_id: 1, ingredient_id: 1 },
    { quantity: 1, unit_id: 1, recipe_id: 1, ingredient_id: 2 },
    { quantity: 2, unit_id: 5, recipe_id: 1, ingredient_id: 3 },
    { quantity: 5, unit_id: 4, recipe_id: 2, ingredient_id: 4 },
    { quantity: 3, unit_id: 1, recipe_id: 2, ingredient_id: 5 },
    { quantity: 2, unit_id: 1, recipe_id: 2, ingredient_id: 6 },
    { quantity: 3, unit_id: 5, recipe_id: 3, ingredient_id: 3 },
    { quantity: 1, unit_id: 4, recipe_id: 3, ingredient_id: 7 },
    { quantity: 2, unit_id: 4, recipe_id: 3, ingredient_id: 8 },
  ]);
};

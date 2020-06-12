exports.seed = function (knex) {
  return knex("steps").insert([
    { step: "mix it", step_num: 1, recipe_id: 1 },
    { step: "bake it", step_num: 2, recipe_id: 1 },
    { step: "eat it", step_num: 3, recipe_id: 1 },
    { step: "chop it", step_num: 1, recipe_id: 2 },
    { step: "boil it", step_num: 2, recipe_id: 2 },
    { step: "eat it", step_num: 3, recipe_id: 2 },
    { step: "chop it", step_num: 1, recipe_id: 3 },
    { step: "toss it", step_num: 2, recipe_id: 3 },
    { step: "eat it", step_num: 3, recipe_id: 3 },
  ]);
};

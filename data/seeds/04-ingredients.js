exports.seed = function (knex) {
  return knex("ingredients").insert([
    { name: "Cornmeal", category_id: 5 },
    { name: "Milk", category_id: 6 },
    { name: "Eggs", category_id: 6 },
    { name: "Beef", category_id: 1 },
    { name: "Tomatoes", category_id: 4 },
    { name: "Carrots", category_id: 3 },
    { name: "Lettuce", category_id: 3 },
    { name: "Ham", category_id: 1 },
  ]);
};

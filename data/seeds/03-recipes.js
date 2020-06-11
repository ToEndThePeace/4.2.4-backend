exports.seed = function (knex) {
  return knex("recipes").insert([
    { name: "Cornbread" },
    { name: "Beef Stew" },
    { name: "Club Salad" },
  ]);
};

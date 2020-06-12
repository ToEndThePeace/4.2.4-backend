exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories").insert([
    { name: "Meat" },
    { name: "Fish" },
    { name: "Vegetable" },
    { name: "Fruit" },
    { name: "Grain" },
    { name: "Dairy" },
  ]);
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("units").insert([
    { unit: "cup" },
    { unit: "tsp" },
    { unit: "oz" },
    { unit: "lb" },
    { unit: "whole" },
  ]);
};

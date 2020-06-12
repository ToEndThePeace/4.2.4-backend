exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (t) => {
      t.increments();
      t.string("name", 255).notNullable();
      t.string("cook_time", 255);
      t.string("prep_time", 255);
    })
    .createTable("categories", (t) => {
      t.increments();
      t.string("name", 255).notNullable().unique();
    })
    .createTable("ingredients", (t) => {
      t.increments();
      t.string("name", 255).notNullable().unique();
      t.integer("category_id")
        .unsigned()
        .references("categories.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("units", (t) => {
      t.increments();
      t.string("unit", 128).notNullable().unique();
    })
    .createTable("measurements", (t) => {
      t.increments();
      t.integer("quantity").unsigned().notNullable();
      t.integer("unit_id")
        .unsigned()
        .references("units.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      t.integer("recipe_id")
        .unsigned()
        .references("recipes.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      t.integer("ingredient_id")
        .unsigned()
        .references("ingredients.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("steps", (t) => {
      t.increments();
      t.string("step", 255).notNullable();
      t.integer("step_num").unsigned().notNullable();
      t.integer("recipe_id")
        .unsigned()
        .references("recipes.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("measurements")
    .dropTableIfExists("units")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("categories")
    .dropTableIfExists("recipes");
};

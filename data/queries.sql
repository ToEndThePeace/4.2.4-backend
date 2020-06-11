-- all recipes and all ingredients
SELECT R.name as [Recipe], 
       M.quantity as [Quantity], 
       U.unit as [Units], 
       I.name as [Ingredient] 
       FROM recipes AS R
  JOIN
  measurements AS M on M.recipe_id = R.id
  JOIN
  ingredients AS I ON M.ingredient_id = I.id
  JOIN
  units AS U ON M.unit_id = U.id
;

-- all steps for a given recipe
SELECT step_num, step FROM steps 
  WHERE recipe_id = 1
  ORDER BY step_num;

-- all ingredients and quantites for a recipe
SELECT I.name as [Ingredient], 
       M.quantity as [Quantity], 
       U.unit as [Units] FROM measurements AS M
  JOIN
  units AS U ON U.id = M.unit_id
  JOIN
  ingredients AS I ON I.id = M.ingredient_id
  WHERE
  M.recipe_id = 1
;

-- Number of ingredients per category
SELECT C.name, COUNT(*) as [Total]
  FROM ingredients AS I
  JOIN categories AS C ON C.id = I.category_id
  GROUP BY C.id;

-- Ingredients and categories
SELECT I.name, C.name as [Ingredient] FROM ingredients AS I
  JOIN
  categories AS C ON C.id = I.category_id;

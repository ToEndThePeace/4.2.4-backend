const router = require("express").Router();
const Ingredients = require("./ingredientsModel");

router.get("/:id/recipes", (req, res) => {
  const { id } = req.params;
  Ingredients.findRecipesWith(id)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not find recipes" });
    });
});

module.exports = router;

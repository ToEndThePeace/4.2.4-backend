const router = require("express").Router();
const Recipes = require("./recipesModel");

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not retrieve recipes" });
    });
});

router.get("/:id/list", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not retrieve list" });
    });
});

router.get("/:id/steps", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
    .then((steps) => {
      res.status(200).json(steps);
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not retrieve steps" });
    });
});

module.exports = router;

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

const recipesRouter = require("../recipes/recipesRouter");
const ingredientsRouter = require("../ingredients/ingredientsRouter");

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use("/api/recipes", recipesRouter);
server.use("/api/ingredients", ingredientsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server running!" });
});

module.exports = server;

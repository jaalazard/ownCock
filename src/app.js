const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.APP_PORT;

const cocktailControllers = require("./controllers/cocktailControllers");

app.get("/api/cocktails/:id", cocktailControllers.getCocktailById);
app.get("/api/cocktails", cocktailControllers.getCocktails);

module.exports = app;

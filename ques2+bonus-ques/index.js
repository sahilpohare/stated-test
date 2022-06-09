const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} headless`);
  next();
});

app.use(logger("tiny"));

for (const route of routes) {
  app[route.method](route.url, route.handler);
}

app.listen(
  process.env.PORT,
  console.log("Jingles is listening on port " + process.env.PORT)
);
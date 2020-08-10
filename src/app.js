const app = require("express");
const github = require("./controllers/github");


app.get("/github", github);

module.exports = app;

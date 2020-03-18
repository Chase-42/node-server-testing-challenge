const express = require("express");
const server = express();

const configureMiddleware = require("./configureMiddleware");

configureMiddleware(server);

server.get("/", (req, res) => {
  res.send("Server is up and running.");
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong."
  });
});

module.exports = server;

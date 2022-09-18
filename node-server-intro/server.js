const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Home</title>
    </head>
    <body>
      <h1>Hello</h1>
    </body>
  </html>
`);
});

server.get("/uh-oh", (request, response) => {
  response.status(500).send("something went wrong");
});

server.get("/search", (req, res) => {
  const keyword = req.query.keyword ? req.query.keyword : "Nothing";
  res.send(`<p>You searched for ${keyword}</p>`);
});

server.get("/users/:name", (req, res) => {
  const { name } = req.params;
  res.send(`<h1>Welcome Abdullah!</h1>`);
});

module.exports = server;

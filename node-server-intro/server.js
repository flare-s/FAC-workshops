const express = require("express");

const server = express();
const bodyParser = express.urlencoded();

function logger(request, response, next) {
  console.log(request.method + " " + request.url);
  next();
}

server.use(logger);

const staticHandler = express.static("public");

server.use(staticHandler);

server.get("/", (req, res) => {
  res.send(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="/styles.css" />
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

server.post("/submit", bodyParser, (request, response) => {
  const name = request.body.name;
  response.redirect(`/submit/success?name=${name}`);
});

server.get("/submit/success", (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Thanks for submiting, ${name}</h1>`);
});

server.use((req, res) => {
  res.status(404).send("<h1>Not found</h1>");
});

module.exports = server;

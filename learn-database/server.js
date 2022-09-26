const express = require("express");
const model = require("./model/tasks");
const server = express();
const template = require("./template");

server.get("/", (req, res) => {
  const tasks = model.selectTasks();
  const list = tasks.map((task) => template.createListItem(task));
  const body = /*html*/ `
    <!doctype html>
    <form method="POST">
      <input id="content" name="content" aria-label="New task" required>
      <button>Add task +</button>
    </form>
    <ul>${list.join("")}</ul>
  `;
  res.send(body);
});

server.post("/", express.urlencoded({ extended: false }), (req, res) => {
  const task = {
    content: req.body.content,
    complete: 0,
  };
  model.insertTask(task);
  res.redirect("/");
});

server.post("/update", express.urlencoded({ extended: false }), (req, res) => {
  const { action, id } = req.body;
  if (action === "remove") model.deleteTask(id);
  if (action === "toggle") model.updateComplete(id);
  res.redirect("/");
});

module.exports = server;

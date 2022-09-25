const db = require("../database/db");

const insert_task = db.prepare("INSERT INTO tasks (content) VALUES (?)");

const createTask = (taskContent) => {
  insert_task.run(taskContent);
};

// Ex of adding a task
// createTask("Eat an apple");
// const tasks = db.prepare("SELECT * FROM tasks").all();
// console.log(tasks);

module.exports = { createTask };

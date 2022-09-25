const db = require("../database/db");

const insert_task = db.prepare(
  /*sql*/
  `INSERT INTO tasks (content, complete)
   VALUES ($content, $complete)
   RETURNING id, content, created_at, complete`
);

const createTask = (taskContent, complete) => {
  insert_task.get(taskContent, complete);
};

// Ex of adding a task
// createTask("Eat breakfast");
// createTask("Go for a run");
// const tasks = db.prepare("SELECT * FROM tasks").all();
// console.log(tasks);

module.exports = { createTask };

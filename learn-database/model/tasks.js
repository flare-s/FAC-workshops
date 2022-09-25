const db = require("../database/db");

const insert_task = db.prepare(
  "INSERT INTO tasks (content) VALUES (?) RETURNING id, content, created_at"
);

const createTask = (taskContent) => {
  insert_task.get(taskContent);
};

// Ex of adding a task
createTask("Eat breakfast");
createTask("Go for a run");
const tasks = db.prepare("SELECT * FROM tasks").all();
console.log(tasks);

module.exports = { createTask };

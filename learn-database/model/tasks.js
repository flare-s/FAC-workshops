const db = require("../database/db");

const insert_task = db.prepare(
  /*sql */
  `INSERT INTO tasks (content, complete)
   VALUES ($content, $complete)
   RETURNING id, content, created_at, complete`
);

const select_tasks = db.prepare(
  /*sql */
  `SELECT 
    id, 
    content, 
    TIME(created_at) as created_at, 
    complete 
  FROM tasks`
);

const delete_task = db.prepare(
  /*sql*/
  `DELETE FROM tasks WHERE id = ?`
);

const deleteTask = (id) => delete_task.run(id);

const selectTasks = () => select_tasks.all();

const insertTask = (task) => insert_task.get(task);

// Ex of adding a task
// insertTask({ content: "Eat breakfast", complete: 1 });
// insertTask({ content: "Go for a run", complete: 0 });

// deleteTask(1);

// selectTasks();

module.exports = { insertTask, selectTasks, deleteTask };

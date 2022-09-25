const test = require("node:test");
const assert = require("node:assert");
const model = require("../model/tasks.js");
const db = require("../database/db.js");

// Delete all tasks and reset ID counter
function reset() {
  db.exec(/*sql*/ `
      DELETE FROM tasks;
      DELETE FROM sqlite_sequence WHERE name='tasks';
    `);
}

test("can create, remove & list tasks", () => {
  console.log(model.selectTasks());
  reset();

  const task = model.insertTask({ content: "test task", complete: 0 });
  assert.equal(task.id, 1);
  assert.equal(task.content, "test task");

  model.deleteTask(task.id);
  const tasks = model.selectTasks();
  assert.equal(tasks.length, 0);
});

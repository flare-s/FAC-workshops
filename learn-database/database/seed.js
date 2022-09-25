const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const { selectTasks, deleteTask } = require("../model/tasks");
const db = require("./db");

const seedPath = join("database", "seed.sql");
const seed = readFileSync(seedPath, "utf-8");
db.exec(seed);
// deleteTask(1);
// console.log(selectTasks());

console.log("DB seeded with example data");

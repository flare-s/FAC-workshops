const Database = require("better-sqlite3");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const db = new Database(process.env.DB_FILE);
// console.log(db);

// Date example
// const select_date = db.prepare(" SELECT DATE()");
// const result = select_date.get();
// console.log(result);

const schemaPath = join("database", "schema.sql");

const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

// Example to show names of current tables
// const select_table = db.prepare("SELECT name FROM sqlite_schema");
// const schemaResult = select_table.all();
// console.log(schemaResult);

module.exports = db;

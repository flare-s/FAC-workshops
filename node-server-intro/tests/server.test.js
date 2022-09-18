const test = require("node:test");
const assert = require("node:assert");
const server = require("../server");

test("The response status is successful", async () => {
  const app = server.listen(2000);
  const serverResponse = await fetch("http://localhost:2000");
  app.close();
  assert.equal(serverResponse.status, 200);
});

test("The request to the home route return the expected content", async () => {
  const app = server.listen(4000);
  const serverResponse = await fetch("http://localhost:4000");
  const body = await serverResponse.text();
  app.close();
  assert.equal(body, "hello");
});

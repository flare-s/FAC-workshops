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
  const app = server.listen(2000);
  const serverResponse = await fetch("http://localhost:2000");
  const body = await serverResponse.text();
  app.close();
  assert.match(body, /Hello/);
});

test("The request to the uh-oh route return the expected status", async () => {
  const app = server.listen(2000);
  const serverResponse = await fetch("http://localhost:2000/uh-oh");
  app.close();
  assert.equal(serverResponse.status, 500);
});

test("The request to the uh-oh route return the expected content", async () => {
  const app = server.listen(2000);
  const serverResponse = await fetch("http://localhost:2000/uh-oh");
  const body = await serverResponse.text();
  app.close();
  assert.equal(body, "something went wrong");
});

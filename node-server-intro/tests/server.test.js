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

test("/search returns message including keyword", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876/search?keyword=bananas");
  app.close();

  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /You searched for bananas/);
});

test("/users/Abdullah returns a greeting message to Abdullah", async () => {
  const app = server.listen(1000);
  const serverResponse = await fetch("http://localhost:1000/users/Abdullah");
  app.close();

  assert.equal(serverResponse.status, 200);
  const body = await serverResponse.text();
  assert.match(body, /Welcome Abdullah!/);
});

test("http requests for undefined routes would return the message NoT found", async () => {
  const app = server.listen(1000);
  const serverResponse = await fetch("http://localhost:1000/rfml");
  app.close();

  assert.equal(serverResponse.status, 404);
  const body = await serverResponse.text();
  assert.match(body, /Not found/);
});

test("Sending a post request to /submit returns the expected content", async () => {
  const app = server.listen(1000);
  const serverResponse = await fetch("http://localhost:1000/submit", {
    method: "POST",
    body: "name=Abdullah",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });
  app.close();

  const body = await serverResponse.text();
  assert.equal(serverResponse.status, 200);
  assert.match(body, /Thanks for submiting, Abdullah/);
});

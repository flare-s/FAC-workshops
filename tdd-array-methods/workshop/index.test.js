// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

test("map() should return a new array that have each element transformed by the callback", () => {
  const result = map([5, 10, 15], (x) => x + x);
  equal(result[0], 10);
  equal(result[1], 20);
  equal(result[2], 30);
});


test("filter() should return a new array with numbers between 20 and 30", () => {
  const result = filter([10, 22, 14, 27], (x) => x > 20 && x < 30);
  equal(result[0], 22);
  equal(result[1], 27);
  equal(result[2], undefined);
});

test("filter() should return a new array with elements that start with a capital letter", () => {
  const result = filter(["Hi", "no", "Be"], (x) => x[0] ===  x[0].toUpperCase());
  equal(result[0], "Hi");
  equal(result[1], "Be");
});


test("every() should return true if all elements are of type number", () => {
  const result = every([10, 22, 14, 27], (x) => typeof x === "number");
  equal(result, true);
});

test("every() should return false if any element in the array is odd", () => {
  const result = every([2, 4, 1], (x) => x % 2 === 0);
  equal(result, false);
});

test("some() should return true if any element in the array is even", () => {
  const result = some([3, 2, 1], (x) => x % 2 === 0);
  equal(result, true);
});
test("some() should return false if every element in the array is less than 100", () => {
  const result = some([55, 49, 99], (x) => x > 100);
  equal(result, false);
});


test("find() should return the first element > 100 and is even", () => {
  const result = find([255, 200, 120], (x) => x > 100 && x % 2 === 0);
  equal(result, 200);
});

test("find() should return false if every element doesn't meet the condition passed to the callback", () => {
  const result = find([55, 49, 99], (x) => x > 100);
  equal(result, undefined);
});

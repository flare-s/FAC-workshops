function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

function notEqual(actual, expected, message) {
  if (actual !== expected) {
    const defaultMessage = `${expected} is different to ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `${expected} is the same as ${actual}`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

const checkObjectsEquality = (obj1, obj2) => {
  for (prop in obj1) {
    if (obj1[prop] !== obj2[prop]) {
      console.error(`Error: Objects are not equal. expected ${prop} to be ${obj1[prop]} but found ${obj2[prop]}`);
      return;
    }
  }
  console.info(`Pass: The objects match`);

}

function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

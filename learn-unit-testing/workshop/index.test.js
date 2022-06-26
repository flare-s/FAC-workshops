test("Test makeUrl function", () => {
    let expected = makeUrl("Mewtwo");
    equal(expected, "https://pokeapi.co/api/v2/Mewtwo");
})

test("Test makeUrl function", () => {
    let expected = makeUrl("Mewtwo");
    notEqual(expected, "https://pokeapi.co/api/v2/Rainamon");
})


test("searchParamsToObject. this test should work returning the string to an object", () => {
    let expected = searchParamsToObject("name=Abdullah&email=webflarez@gmail.com");
    let actual = {
        name: "Abdullah",
        email: "webflarez@gmail.com"
    }

    if (expected.name === actual.name && expected.email === actual.email) {
        return console.log(true);
    }
    return console.log(false);
})

test("Test checkObjectsEquality function, this test should work", () => {
    let expected = searchParamsToObject("name=Abdullah&email=webflarez@gmail.com");
    let actual = {
        name: "Abdullah",
        email: "webflarez@gmail.com"
    }
    checkObjectsEquality(expected, actual);
    
})

test("Test checkObjectsEquality function, this test should fail", () => {
    let expected = searchParamsToObject("name=Abdullah&email=webflarez@gmail.com");
    let actual = {
        name: "abdullah",
        email: "webflarez@gmail.com"
    }
    checkObjectsEquality(expected, actual);
    
})

test("test isLeapYear function. This should succeed returning true.", () => {
    equal(isLeapYear(2000), true);
})

test("test isLeapYear function. This should succeed returning true.", () => {
    equal(isLeapYear(2008), true);
})
test("test isLeapYear function. This should succeed returning error messaage.", () => {
    equal(isLeapYear(-1), "Negative numbers are not a valid year.");
})
test("test isLeapYear function. This should succeed returning error messaage.", () => {
    equal(isLeapYear("2000"), "Please enteer a number");
})
test("test isLeapYear function. This should fail returning false.", () => {
    equal(isLeapYear(1900), true);
})
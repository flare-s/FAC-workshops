//  Chalenge 1
test("calculate(2, '+', 2) should return 4", () => {
    equal(calculate(2, "+", 2), 4)
})

test("calculate(3, '+', 2) should not return 4", () => {
    notEqual(calculate(3, "+", 2), 4)
})
test("calculate(2, '-', 2) should return 0", () => {
    equal(calculate(2, "-", 2), 0)
})

test("calculate(2, '-', 1) should not return 3", () => {
    notEqual(calculate(2, "-", 1), 3)
})
test("calculate(2, '*', 2) should return 4", () => {
    equal(calculate(2, "*", 2), 4)
})
test("calculate(2, '*', 3) should not return 5", () => {
    notEqual(calculate(2, "*", 3), 5)
})
test("calculate(8, '/', 2) should return 4", () => {
    equal(calculate(8, "/", 2), 4)
})
test("calculate(2, '/', 2) should not return 0", () => {
    notEqual(calculate(2, "/", 2), 0)
})

test("passing strings to calculate", () => {
    equal(calculate("2", "+", "2"), 4)
})

// Challenge 2

test("Calculate the user's input", () => {
    let a = document.querySelector("[name='a']")
    let b = document.querySelector("[name='b']")
    let sign = document.querySelector("[name='sign']");
    let submit = document.querySelector("[type='submit']");
    let result = document.querySelector("#result");
    a.value = 5;
    sign.value = "+"
    b.value = 5;
    submit.click();
    equal(+result.textContent, 10)
    result.textContent = "";


})

test("Calculate the user's input", () => {
    let a = document.querySelector("[name='a']")
    let b = document.querySelector("[name='b']")
    let sign = document.querySelector("[name='sign']");
    let submit = document.querySelector("[type='submit']");
    let result = document.querySelector("#result");
    a.value = 5;
    sign.value = "-"
    b.value = 5;
    submit.click();
    equal(+result.textContent, 0);
    result.textContent = "";


})

test("Calculate the user's input", () => {
    let a = document.querySelector("[name='a']")
    let b = document.querySelector("[name='b']")
    let sign = document.querySelector("[name='sign']");
    let submit = document.querySelector("[type='submit']");
    let result = document.querySelector("#result");
    a.value = 5;
    sign.value = "*"
    b.value = 5;
    submit.click();
    equal(+result.textContent, 25)
    result.textContent = "";


})

test("Calculate the user's input", () => {
    let a = document.querySelector("[name='a']")
    let b = document.querySelector("[name='b']")
    let sign = document.querySelector("[name='sign']");
    let submit = document.querySelector("[type='submit']");
    let result = document.querySelector("#result");
    a.value = 5;
    sign.value = "/"
    b.value = 5;
    submit.click();
    equal(+result.textContent, 1)
    result.textContent = "";


})
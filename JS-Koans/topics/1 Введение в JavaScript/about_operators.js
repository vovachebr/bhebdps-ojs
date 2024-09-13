
describe("About Operators (about_operators.js)", function() {
  it("addition", function() {
    let result = 0;
    //starting i at 0, add i to result and increment i by 1 until i is equal to 5
    for (let i = 0; i <= 5; i++) {
      result = result + i;
    }
    // What is the value of result?
    expect(15).toBe(result);
  });

  it("assignment addition", function() {
    let result = 0;
    for (let i = 0; i <= 5; i++) {
      //the code below is just like saying result = result + i; but is more concise
      result += i;
    }
    // What is the value of result?
    expect(15).toBe(result);
  });

  it("subtraction", function() {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result = result - i;
    }
    // What is the value of result?
    expect(2).toBe(result);
  });

  it("assignment subtraction", function() {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result -= i;
    }
    // What is the value of result?
    expect(2).toBe(result);
  });

  //Assignment operators are available for multiplication and division as well
  //let's do one more, the modulo operator, used for showing division remainder

  it("modulus", function() {
    let result = 10;
    let x = 5;
    //again this is exactly the same as result = result % x
    result %= x;
    // What is the value of result?
    expect(0).toBe(result);
  });

  it("typeof", function() {
    // what is the type of an empty object?
    expect('object').toBe(typeof({}));
    // what is the type of a string?
    expect('string').toBe(typeof('apple'));
    // what is the type of -5?
    expect('number').toBe(typeof(-5));
    // what is the type of false?
    expect('boolean').toBe(typeof(false));
  });
});

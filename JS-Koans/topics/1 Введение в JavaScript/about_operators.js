describe("About Operators (about_operators.js)", function() {
  it("addition", function() {
    let result = 0;

    for (let i = 0; i <= 5; i++) {
      result = result + i;
    }

    expect(15).toBe(result);
  });

  it("assignment addition", function() {
    let result = 0;

    for (let i = 0; i <= 5; i++) {
      result += i;
    }

    expect(15).toBe(result);
  });

  it("subtraction", function() {
    let result = 5;

    for (let i = 0; i <= 2; i++) {
      result = result - i;
    }

    expect(2).toBe(result);
  });

  it("assignment subtraction", function() {
    let result = 5;

    for (let i = 0; i <= 2; i++) {
      result -= i;
    }

    expect(2).toBe(result);
  });

  it("modulus", function() {
    let result = 10;
    let x = 5;

    result %= x;

    expect(0).toBe(result);
  });

  it("typeof", function() {
    expect("object").toBe(typeof {});
    expect("string").toBe(typeof 'apple');
    expect("number").toBe(typeof -5);
    expect("boolean").toBe(typeof false);
  });
});

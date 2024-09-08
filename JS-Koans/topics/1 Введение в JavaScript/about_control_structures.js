describe("About Control Structures (about_control_structures.js)", function(){
  it("if", function() {
    let isPositive = false;
    if (2 > 0) {
      isPositive = true;
    }

    // what is the value of isPositive?
    expect(true).toBe(isPositive);
  });

  it("for", function() {
    let counter = 10;
    for (let i = 1; i <= 3; i++) {
      counter = counter + i;
    }

    // what is the value of counter?
    expect(16).toBe(counter);
  });

  it("for in", function() {
    // this syntax will be explained in about objects
    let person = {
      name: "Amory Blaine",
      age: 102
    };
    let result = "";
    // for in enumerates the property names of an object
    for (let property_name in person) {
        result = result + property_name;
    }

    // what is the value of result?
    expect("nameage").toBe(result);
  });

  it("ternary operator", function() {
    let fruit = true ? "apple" : "orange";
    expect("apple").toBe(fruit, 'what is the value of fruit?');

    fruit = false ? "apple" : "orange";
    expect("orange").toBe(fruit, 'now what is the value of fruit?');
  });

  it("switch", function() {
    let result = 0;
    switch (2) {
      case 1:
        result = 1;
        break;
      case 1+1:
        result = 2;
        break;
    }

    // what is the value of result?
    expect(2).toBe(result);
  });

  it("switch default case", function() {
    let result = "Pippin";
    switch ("m") {
      case "f":
        result = "Frodo";
        break;
      case "s":
        result = "Samwise";
          break;
      default:
        result = "Merry";
        break;
    }

    // what is the value of result?
    expect("Merry").toBe(result);
  });

  it("null coalescing", function() {
    let result = null || "a value";

    // what is the value of result?
    expect("a value").toBe(result);
  });
});

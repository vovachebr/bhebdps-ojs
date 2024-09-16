
describe("About Objects (about_objects.js)", function() {
  it("object type", function() {
    let emptyObject = {};
    // what is the type of an object?
    expect("object").toBe(typeof(emptyObject));
  });

  it("object literal notation", function() {
    let person = {
      name: "Amory Blaine",
      age: 102
    };
    // what is the person's name?
    expect("Amory Blaine").toBe(person.name);
    // what is the person's age?
    expect(102).toBe(person.age);
  });

  it("dynamically adding properties", function() {
    let person = {};
    person.name = "Amory Blaine";
    person.age = 102;
    // what is the person's name?
    expect("Amory Blaine").toBe(person.name);
    // what is the person's age?
    expect(102).toBe(person.age);
  }); 

  it("adding properties from strings", function() {
    let person = {};
    person["name"] = "Amory Blaine";
    person["age"] = 102;
    // what is the person's name?
    expect("Amory Blaine").toBe(person.name);
    // what is the person's age?
    expect(102).toBe(person.age);
  });

  it("adding functions", function() {
    let person = {
      name: "Amory Blaine",
      age: 102,
      toString: function() {
        return "I " + this.name + " am " + this.age + " years old.";  // HINT: use the 'this' keyword to refer to the person object.
      }
    };
    // what should the toString function be?
    expect("I Amory Blaine am 102 years old.").toBe(person.toString());
  });

  it("property enumeration", function() {
    let keys = [];
    let values = [];
    let person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(let propertyName in person) {
      keys.push(propertyName);
      values.push(person[propertyName]);
    }
    // what are the property names of the object?
    expect(keys).toEqual([ "name", "age", "unemployed"]);
    // what are the property values of the object?
    expect(values).toEqual([ "Amory Blaine", 102, true]);
  });
});

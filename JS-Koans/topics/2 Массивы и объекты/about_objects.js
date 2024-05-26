
describe("About Objects (about_objects.js)", function() {
  it("object type", function() {
    let emptyObject = {};
    // Какой тип у объектов?
    expect(FILL_ME_IN).toBe(typeof emptyObject);
  });

  it("object literal notation", function() {
    let person = {
      FILL_ME_IN: FILL_ME_IN,
      FILL_ME_IN: FILL_ME_IN
    };
    // Какое имя у объекта person?
    expect("Amory Blaine").toBe(person.name);
    // Какое значение в свойстве age?
    expect(102).toBe(person.age);
  });

  it("dynamically adding properties", function() {
    let person = {};
    person.FILL_ME_IN = "Amory Blaine";
    person.FILL_ME_IN = 102;
    // Какое имя у объекта person?
    expect("Amory Blaine").toBe(person.name);
    // Какое значение в свойстве age?
    expect(102).toBe(person.age);
  }); 

  it("adding properties from strings", function() {
    let person = {};
    person["FILL_ME_IN"] = "Amory Blaine";
    person["FILL_ME_IN"] = 102;
    // Какое имя у объекта person?
    expect("Amory Blaine").toBe(person.name);
    // Какое значение в свойстве age?
    expect(102).toBe(person.age);
  });

  it("adding functions", function() {
    let person = {
      name: "Amory Blaine",
      age: 102,
      toString: function() {
        return FILL_ME_IN;  // Подсказка: используйте ключевое слово 'this' для обращения к объекту person.
      }
    };
    // Какое значение возвращает метод toString?
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
    // Какие имена свойств у объекта?
    expect(keys).toEqual([ FILL_ME_IN, FILL_ME_IN, FILL_ME_IN]);
    // Какие значения свойств у объекта?
    expect(values).toEqual([ FILL_ME_IN, FILL_ME_IN, FILL_ME_IN]);
  });
});

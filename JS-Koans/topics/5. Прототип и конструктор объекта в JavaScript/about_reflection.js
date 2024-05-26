describe("About Reflection (about_reflection.js)", function() {
  function A() {
    this.aprop = "A";
  };

  function B() {
    this.bprop = "B";
  };

  B.prototype = new A();

  it("hasOwnProperty", function() {
    let b = new B();

    let keys = [];
    for (let propertyName in b) {
      keys.push(propertyName);
    }
    // Сколько элементов в массиве keys?
    expect(FILL_ME_IN).toBe(keys.length);
    // Какие это элементы?
    expect([FILL_ME_IN, FILL_ME_IN]).toEqual(keys);

    // hasOwnProperty возвращает true, если параметр является свойством непосредственно объекта,
    // но не в том случае, если это свойство доступно через цепочку прототипов.
    let ownKeys = [];
    for(let propertyName in b) {
      if (b.hasOwnProperty(propertyName)) {
        ownKeys.push(propertyName);
      }
    }

    // Сколько элементов в массиве ownKeys?
    expect(FILL_ME_IN).toBe(ownKeys.length);
    // Какие это элементы?
    expect([FILL_ME_IN]).toEqual(ownKeys);
  });

  it("constructor property", function () {
    let a = new A();
    let b = new B();
    // Какой тип конструктора a?
    expect(FILL_ME_IN).toBe(typeof a.constructor);
    // Какое имя у конструктора a?
    expect(FILL_ME_IN).toBe(a.constructor.name);
    // Какое имя у конструктора b?
    expect(FILL_ME_IN).toBe(b.constructor.name);
  });
});

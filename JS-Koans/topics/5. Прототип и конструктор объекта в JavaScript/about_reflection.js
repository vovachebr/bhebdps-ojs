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

    expect(2).toBe(keys.length);
    expect(["bprop", "aprop"]).toEqual(keys);

    let ownKeys = [];
    for(let propertyName in b) {
      if (b.hasOwnProperty(propertyName)) {
        ownKeys.push(propertyName);
      }
    }

    expect(1).toBe(ownKeys.length);
    expect(["bprop"]).toEqual(ownKeys);
  });

  it("constructor property", function () {
    let a = new A();
    let b = new B();

    expect("function").toBe(typeof a.constructor);
    expect("A").toBe(a.constructor.name);
    expect("B").toBe(b.constructor.name);
  });
});

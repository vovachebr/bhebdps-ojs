describe("About Prototypal Inheritance (about_prototypal_inheritance.js)", function() {

  let Mammal = function(name) {
    this.name = name;
  }

  Mammal.prototype = {
    sayHi: function() {
      return "Hello, my name is " + this.name;
    }
  }

  it("defining a 'class'", function() {
    let eric  = new Mammal("Eric");

    expect("Hello, my name is Eric").toBe(eric.sayHi());
  });

  Mammal.prototype.favouriteSaying = function() {
    return this.name + "'s favourite saying is " + this.sayHi(); 
  }

  it("more functions", function() {
    let bobby = new Mammal("Bobby");

    expect("Bobby's favourite saying is Hello, my name is Bobby").toBe(bobby.favouriteSaying()); 
  });

  it("calling functions added to a prototype after an object was created", function() {
    let paul = new Mammal("Paul");

    Mammal.prototype.numberOfLettersInName = function() {
      return this.name.length;
    };

    expect(4).toBe(paul.numberOfLettersInName());
  });

  function extend(child, supertype){  
    child.prototype = supertype.prototype;  
  } 

  function Bat(name, wingspan) {
    Mammal.call(this, name);
    this.wingspan = wingspan;
  }

  extend(Bat, Mammal);

  it("Inheritance", function() {
    let lenny = new Bat("Lenny", "1.5m");

    expect("Hello, my name is Lenny").toBe(lenny.sayHi());
    expect("1.5m").toBe(lenny.wingspan);
  });
});
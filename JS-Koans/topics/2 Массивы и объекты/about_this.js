describe("About this (about_this.js)", function() {
  it("'this' inside a method", function () {
    let person = {
      name: 'bob',
      intro: function () {
        return "Hello, my name is " + this.name;
      }
    }

    // If an object has a method can you access properties inside it?
    expect(person.intro()).toBe("Hello, my name is bob");
  });

  it("'this' on unattached function", function () {
    let person = {
      globalName: 'bob',
      intro: function () {
        return "Hello, my name is " + this.globalName;
      }
    }

    let alias = person.intro;

    // if the function is not called as an object property 'this' is the global context 
    // (window in a browser). This is an example. Please do not do this in practise.
    window.globalName = 'Peter';

    // What does 'this' refer to when it is not part of an object?
    expect(alias()).toBe("Hello, my name is Peter");
  });

  it("'this' set explicitly", function () {
    let person = {
      name: 'bob',
      intro: function () {
        return "Hello, my name is " + this.name;
      }
    }

    // calling a function with 'call' lets us assign 'this' explicitly
    let message = person.intro.call({name: "Frank"});

    // What does 'this' refer to when you use the 'call()' method?
    expect(message).toBe("Hello, my name is Frank");
  });
});


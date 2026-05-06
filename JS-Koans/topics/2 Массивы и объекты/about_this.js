describe("About this (about_this.js)", function() {
  it("'this' inside a method", function () {
    let person = {
      name: 'bob',
      intro: function () {
        return "Hello, my name is " + this.name;
      }
    }

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

    window.globalName = 'Peter';

    expect(alias()).toBe("Hello, my name is Peter");
  });

  it("'this' set explicitly", function () {
    let person = {
      name: 'bob',
      intro: function () {
        return "Hello, my name is " + this.name;
      }
    }

    let message = person.intro.call({name: "Frank"});

    expect(message).toBe("Hello, my name is Frank");
  });
});


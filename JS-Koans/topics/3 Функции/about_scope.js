describe("About Scope (about_scope.js)", function() {
  thisIsAGlobalVariable = 77;

  it("global variables", function() {
    expect(77).toBe(thisIsAGlobalVariable);
  });

  it("variables declared inside of a function", function() {
    let outerVariable = "outer";

    (function() {
      let innerVariable = "inner";

      expect("outer").toBe(outerVariable);
      expect("inner").toBe(innerVariable);
    })();

    expect("outer").toBe(outerVariable);
    expect("undefined").toBe(typeof(innerVariable));
  });
});
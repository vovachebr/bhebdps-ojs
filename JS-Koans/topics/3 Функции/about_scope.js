describe("About Scope (about_scope.js)", function() {
  thisIsAGlobalVariable = 77;

  it("global variables", function() {
    // is thisIsAGlobalVariable defined in this scope?
    expect(77).toBe(thisIsAGlobalVariable);
  });

  it("variables declared inside of a function", function() {
    let outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function() {
      let innerVariable = "inner";
      // is outerVariable defined in this scope?
      expect("outer").toBe(outerVariable);
      // is innerVariable defined in this scope?
      expect("inner").toBe(innerVariable);
    })();

    // is outerVariable defined in this scope?
    expect("outer").toBe(outerVariable);
    // is innerVariable defined in this scope?
    expect("undefined").toBe(typeof(innerVariable));
  });
});

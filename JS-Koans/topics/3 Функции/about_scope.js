describe("About Scope (about_scope.js)", function() {
  thisIsAGlobalVariable = 77;

  it("global variables", function() {
    // определено ли thisIsAGlobalVariable в этой области видимости?
    expect(FILL_ME_IN).toBe(thisIsAGlobalVariable);
  });

  it("variables declared inside of a function", function() {
    let outerVariable = "outer";

    // это самовызывающаяся функция. Обратите внимание, что она вызывает себя в конце на скобки вызова: ().
    (function() {
      let innerVariable = "inner";
      // определено ли outerVariable в этой области видимости?
      expect(FILL_ME_IN).toBe(outerVariable);
      // определено ли innerVariable в этой области видимости?
      expect(FILL_ME_IN).toBe(innerVariable);
    })();

    // определено ли outerVariable в этой области видимости?
    expect(FILL_ME_IN).toBe(outerVariable);
    // определено ли innerVariable в этой области видимости?
    expect(FILL_ME_IN).toBe(typeof(innerVariable));
  });
});


describe("About Equality (about_equality.js)", function(){
  it("numeric equality", function() {
    expect(3 + 4).toBe(7);
  });

  it("string equality", function() {
    // concatenate the strings
    expect("3" + "7").toBe("37");
  });

  it("equality without type coercion", function() {
    // what is exactly equal to 3?
    expect(3 === 3).toBeTruthy();
  });

  it("equality with type coercion", function() {
    // what string is equal to 3, with type coercion?
    expect(3 == "3").toBeTruthy();
  });

  it("string literals", function() {
    // quote types are interchangable, but must match.
    expect('frankenstein' === "frankenstein").toBeTruthy();
    // quote types can use both single and double quotes.
    expect("frankenstein" === 'frankenstein').toBeTruthy();
  });
});
describe("About Equality (about_equality.js)", function(){
  it("numeric equality", function() {
    expect(3 + 4).toBe(7);
  });

  it("string equality", function() {
    expect("3" + "7").toBe("37");
  });

  it("equality without type coercion", function() {
    expect(3 === 3).toBeTruthy();
  });

  it("equality with type coercion", function() {
    expect(3 == "3").toBeTruthy();
  });

  it("string literals", function() {
    expect("frankenstein" === "frankenstein").toBeTruthy();
    expect('frankenstein' === 'frankenstein').toBeTruthy();
  });
});
describe("About Strings (about_strings.js)", function() {
  it("delimiters", function() {
    let singleQuotedString = 'apple';
    let doubleQuotedString = "apple";

    expect(true).toBe(singleQuotedString === doubleQuotedString);
  });

  it("concatenation", function() {
    let fruit = "apple";
    let dish = "pie";

    expect("apple pie").toBe(fruit + " " + dish);
  });

  it("character Type", function() {
    let characterType = typeof("Amory".charAt(1));

    expect("string").toBe(characterType);
  });

  it("escape character", function() {
    let stringWithAnEscapedCharacter  = "\u0041pple";

    expect("Apple").toBe(stringWithAnEscapedCharacter);
  });

  it("string.length", function() {
    let fruit = "apple";

    expect(5).toBe(fruit.length);
  });

  it("slice", function() {
    let fruit = "apple pie";

    expect("apple").toBe(fruit.slice(0,5));
  });
});
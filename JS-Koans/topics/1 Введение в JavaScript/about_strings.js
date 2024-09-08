
describe("About Strings (about_strings.js)", function() {
  it("delimiters", function() {
    let singleQuotedString = 'apple';
    let doubleQuotedString = "apple";
    // are the two strings equal?
    expect(true).toBe(singleQuotedString === doubleQuotedString);
  });

  it("concatenation", function() {
    let fruit = "apple";
    let dish = "pie";
    // are the two strings equal?
    expect("apple pie").toBe(fruit + " " + dish);
  });

  it("character Type", function() {
    let characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    // Javascript has no character type
    expect("string").toBe(characterType);
  });

  it("escape character", function() {
    let stringWithAnEscapedCharacter  = "\u0041pple";
    // what  is the value of stringWithAnEscapedCharacter?
    expect("Apple").toBe(stringWithAnEscapedCharacter);
  });

  it("string.length", function() {
    let fruit = "apple";
    // what is the value of fruit.length?
    expect(5).toBe(fruit.length);
  });

  it("slice", function() {
    let fruit = "apple pie";
    // what is the value of fruit.slice(0,5)?
    expect("apple").toBe(fruit.slice(0,5));
  }); 
});


describe("About Strings (about_strings.js)", function() {
  it("delimiters", function() {
    let singleQuotedString = 'apple';
    let doubleQuotedString = "apple";
    // Эти две строки равны?
    expect(FILL_ME_IN).toBe(singleQuotedString === doubleQuotedString);
  });

  it("concatenation", function() {
    let fruit = "apple";
    let dish = "pie";
    // Эти две строки равны?
    expect(FILL_ME_IN).toBe(fruit + " " + dish);
  });

  it("character Type", function() {
    let characterType = typeof("Amory".charAt(1));
    // В JavaScript нет типа "символ"
    expect(FILL_ME_IN).toBe(characterType);
  });

  it("escape character", function() {
    let stringWithAnEscapedCharacter  = "\u0041pple";
    // Какое значение в переменной stringWithAnEscapedCharacter?
    expect(FILL_ME_IN).toBe(stringWithAnEscapedCharacter);
  });

  it("string.length", function() {
    let fruit = "apple";
    // Какое значение в fruit.length?
    expect(FILL_ME_IN).toBe(fruit.length);
  });

  it("slice", function() {
    let fruit = "apple pie";
    // Какое значение в fruit.slice(0,5)?
    expect(FILL_ME_IN).toBe(fruit.slice(0,5));
  }); 
});

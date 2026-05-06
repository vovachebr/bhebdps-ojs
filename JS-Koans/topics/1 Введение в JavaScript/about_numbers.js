describe("About Numbers (about_numbers.js)", function() {
  it("types", function() {
    let typeOfIntegers = typeof(6);
    let typeOfFloats = typeof(3.14159);

    expect(true).toBe(typeOfIntegers === typeOfFloats);

    expect("number").toBe(typeOfIntegers);

    expect(1).toBe(1.0);
  });

  it("NaN", function() {
    let resultOfFailedOperations = 7 / 'apple';

    expect(true).toBe(isNaN(resultOfFailedOperations));

    expect(false).toBe(resultOfFailedOperations == NaN);
  });
});
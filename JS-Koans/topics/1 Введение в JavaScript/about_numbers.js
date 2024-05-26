describe("About Numbers (about_numbers.js)", function() {
  it("types", function() {
    let typeOfIntegers = typeof(6);
    let typeOfFloats = typeof(3.14159);
    // Являются ли целые числа и числа с плавающей точкой одним и тем же типом?
    expect(FILL_ME_IN).toBe(typeOfIntegers === typeOfFloats);
    // Какой тип у чисел в javascript?
    expect(FILL_ME_IN).toBe(typeOfIntegers);
    // Какое целое число равно 1.0?
    expect(FILL_ME_IN).toBe(1.0);
  });

  it("NaN", function() {
    let resultOfFailedOperations = 7/'apple';
    // Что удовлетворит следующее утверждение о равенстве?
    expect(trFILL_ME_INue).toBe(isNaN(resultOfFailedOperations));
    // Что вернёт NaN == NaN?
    expect(FILL_ME_IN).toBe(resultOfFailedOperations == NaN);
  });
});
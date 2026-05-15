
describe("About Truthyness (about_truthyness.js)", function() {
  it("truthyness of positive numbers", function() {
    let oneIsTruthy = 1 ? true : false;
    // Является ли 1 истинным значением?
    expect(1? true : false).toBe(oneIsTruthy);
  });

  it("truthyness of negative numbers", function() {
    let negativeOneIsTruthy = -1 ? true : false;
    // Является ли -1 истинным значением?
    expect(-1 ? true : false).toBe(negativeOneIsTruthy);
  });

  it("truthyness of zero", function() {
    let zeroIsTruthy = 0 ? true : false;
    // Является ли 0 истинным значением?
    expect(0 ? true : false).toBe(zeroIsTruthy);
  });

  it("truthyness of null", function() {
    let nullIsTruthy = null ? true : false;
    // Является ли null истинным значением?
    expect(null ? true : false).toBe(nullIsTruthy);
  });
});

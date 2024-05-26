
describe("About Truthyness (about_truthyness.js)", function() {
  it("truthyness of positive numbers", function() {
    let oneIsTruthy = 1 ? true : false;
    // Является ли 1 истинным значением?
    expect(FILL_ME_IN).toBe(oneIsTruthy);
  });

  it("truthyness of negative numbers", function() {
    let negativeOneIsTruthy = -1 ? true : false;
    // Является ли -1 истинным значением?
    expect(FILL_ME_IN).toBe(negativeOneIsTruthy);
  });

  it("truthyness of zero", function() {
    let zeroIsTruthy = 0 ? true : false;
    // Является ли 0 истинным значением?
    expect(FILL_ME_IN).toBe(zeroIsTruthy);
  });

  it("truthyness of null", function() {
    let nullIsTruthy = null ? true : false;
    // Является ли null истинным значением?
    expect(FILL_ME_IN).toBe(nullIsTruthy);
  });
});

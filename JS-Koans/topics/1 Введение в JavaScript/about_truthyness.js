describe("About Truthyness (about_truthyness.js)", function() {
  it("truthyness of positive numbers", function() {
    let oneIsTruthy = 1 ? true : false;

    expect(true).toBe(oneIsTruthy);
  });

  it("truthyness of negative numbers", function() {
    let negativeOneIsTruthy = -1 ? true : false;

    expect(true).toBe(negativeOneIsTruthy);
  });

  it("truthyness of zero", function() {
    let zeroIsTruthy = 0 ? true : false;

    expect(false).toBe(zeroIsTruthy);
  });

  it("truthyness of null", function() {
    let nullIsTruthy = null ? true : false;

    expect(false).toBe(nullIsTruthy);
  });
});

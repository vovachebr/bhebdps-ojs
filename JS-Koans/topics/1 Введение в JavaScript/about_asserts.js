describe("About Asserts (about_asserts.js)", function() {
  it('should expect true', function() {
    expect(true).toBe(true);
  });

  it('should expect equality', function() {
    let expectedValue = 2;
    let actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  it('should assert equality a better way', function() {
    let expectedValue = 2;
    let actualValue = 1 + 1;

    expect(actualValue).toEqual(expectedValue);
  });

  it('should assert equality with ===', function() {
    let expectedValue = "2";
    let actualValue = (1 + 1).toString();

    expect(actualValue).toBe(expectedValue);
  });

  it('should have filled in values', function() {
    expect(1 + 1).toEqual(2);
  });
});


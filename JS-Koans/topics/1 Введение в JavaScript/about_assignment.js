
describe("About Assignment (about_assignment.js)", function() {
  it("local variables", function() {
    let temp = 1;
    // Assign a value to the variable temp
    expect(temp).toBe(1);
  });
  
  it("global variables", function() {
    temp = 1; // Not using let is an example. Always use let in practise.
    // global variables are assigned to the window object
    expect(window.temp).toBe(temp);
  });
});



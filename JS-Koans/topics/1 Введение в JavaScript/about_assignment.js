
describe("About Assignment (about_assignment.js)", function() {
  it("local variables", function() {
    let temp = FILL_ME_IN;
    // Присвойте значение переменной temp
    expect(temp).toBe(1);
  });
  
  it("global variables", function() {
    temp = 1; // Неиспользование let - это пример. На практике всегда используйте let.
    // глобальные переменные присваиваются объекту window
    expect(window.FILL_ME_IN).toBe(temp);
  });
});



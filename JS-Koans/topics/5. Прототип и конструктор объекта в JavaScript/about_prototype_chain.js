describe("About Prototype Chain (about_prototype_chain.js)", function() {
  let father = {
    b: 3,
    c: 4
  };
  
  let child = Object.create(father);
  child.a = 1;
  child.b = 2;
  
  it("Is there an 'a' and 'b' own property on child?", function () {
    expect(true).toBe(child.hasOwnProperty('a'));
    expect(true).toBe(child.hasOwnProperty('b'));
  });
  
  it("Is there an 'a' and 'b' property on child?", function () {
    expect(1).toBe(child.a);
    expect(2).toBe(child.b);
  });
  
  it("If 'b' was removed, whats b value?", function () {
    delete child.b;
    expect(3).toBe(child.b);
  });
  
  it("Is there a 'c' own property on child?", function () {
    expect(false).toBe(child.hasOwnProperty('c'));
  });
  
  it("Is there a 'c' property on child?", function () {
    expect(4).toBe(child.c);
  });
  
  it("Is there an 'd' property on child?", function () {
    expect(undefined).toBe(child.d);
  });
});

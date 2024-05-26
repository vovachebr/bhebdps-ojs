describe("About Higher Order Functions (about_higher_order_functions.js)", function () {

  it("should use filter to return array items that meet a criteria", function () {
    let numbers = [1,2,3];
    let odd = numbers.filter(function (x) { return x % 2 !== 0 });

    expect(odd).toEqual(FILL_ME_IN);
    expect(odd.length).toBe(FILL_ME_IN);
    expect(numbers.length).toBe(FILL_ME_IN);
  });

  it("should use 'map' to transform each element", function () {
    let numbers = [1, 2, 3];
    let numbersPlus1 = numbers.map(function(x) { return x + 1 });

    expect(numbersPlus1).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    let numbers = [1, 2, 3];
    let reduction = numbers.reduce(
            function(/* Результат предыдущего вызова */ memo, /* текущее значение */ x) { return memo + x }, /* начальное значение */ 0);

    expect(reduction).toBe(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'forEach' for simple iteration", function () {
    let numbers = [1,2,3];
    let msg = "";
    let isEven = function (item) {
      msg += (item % 2) === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'every' to test whether all items pass condition", function () {
    let onlyEven = [2,4,6];
    let mixedBag = [2,4,5,6];

    let isEven = function(x) { return x % 2 === 0 };

    expect(onlyEven.every(isEven)).toBe(FILL_ME_IN);
    expect(mixedBag.every(isEven)).toBe(FILL_ME_IN);
  });

  it("should use 'some' to test if any items passes condition" , function () {
    let onlyEven = [2,4,6];
    let mixedBag = [2,4,5,6];

    let isEven = function(x) { return x % 2 === 0 };

    expect(onlyEven.some(isEven)).toBe(FILL_ME_IN);
    expect(mixedBag.some(isEven)).toBe(FILL_ME_IN);
  });

  it("should use flatten to make nested arrays easy to work with", function() {
      expect([ [1, 2], [3, 4] ].flat()).toEqual(FILL_ME_IN);
  });

  it("should use flat() ... reduce() to use multiple higher order functions", function() {
      let result = [ [0, 1], 2 ].flat()
        .map(function(x) { return x+1 } )
        .reduce(function (sum, x) { return sum + x });

      expect(result).toEqual(FILL_ME_IN);
  });

});


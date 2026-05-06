describe("About Functions And Closure (about_functions_and_closure.js)", function() {

  it("defining functions directly", function() {
    let result = "a";

    function changeResult() {
      result = "b";
    };

    changeResult();

    expect("b").toBe(result);
  });

  it("assigning functions to variables", function() {
    let triple = function(input) {
      return input * 3;
    };

    expect(12).toBe(triple(4));
  });

  it("self invoking functions", function() {
    let publicValue = "shared";

    (function(pv) {
      let secretValue = "password";

      expect("shared").toBe(pv);
      expect("string").toBe(typeof secretValue);
      expect("string").toBe(typeof publicValue);

    })(publicValue);

    expect("undefined").toBe(typeof secretValue);
    expect("string").toBe(typeof publicValue);
  });

  it("arguments array", function() {
    let add = function() {
      let total = 0;

      for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
      }

      return total;
    };

    expect(15).toBe(add(1,2,3,4,5));
    expect(9).toBe(add(4,7,-2));
  });

  it("using call to invoke function",function(){
    let invokee = function(message){
      return this + message;
    };

    let result = invokee.call("I am this!", "Where did it come from?");

    expect("I am this!Where did it come from?").toBe(result);
  });

  it("using apply to invoke function",function(){
    let invokee = function(message1, message2){
      return this + message1 + message2;
    };

    let result = invokee.apply("I am this!", ["I am arg1","I am arg2"]);

    expect("I am this!I am arg1I am arg2").toBe(result);
  });

});

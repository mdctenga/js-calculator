var calculator = calculatorModule();
console.log(calculator.load(1));

var calculator2 = calculatorModule();
console.log(calculator2.load(376));

calculator.add(50);
calculator2.add(50);

console.log(calculator.getTotal());
console.log(calculator2.getTotal());
/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule(){
  // var memory = _memory;
  // var total = _total;
  var memory = 0;
  var total = 0;
  var module = {
    load: load,
    getTotal: _total,
    add: _add,
    subtract: _subtract,
    multiply: _multipy,
    divide: _divide,
    recall: _recall,
    save: _save,
    clear: _clear,
  }
  return module;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function load (x) {
    total = x;
    return total;
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
  function _total (){
    return total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function _add (x){
    if (typeof x !== "number"){
      return "Error Message";
    } else {
      return total += x;
    }

      
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function _subtract (x){
    if (typeof x !== "number"){
      return "Error Message";
    } else {
      return total -= x;
    }
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function _multipy (x){
    if (typeof x !== "number"){
      return "Error Message";
    } else {
      return total *= x;
    }
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function _divide (x){
    if (typeof x !== "number"){
      return "Error Message";
    } else {
      return total /= x;
    }
  }

    /**
   * Return the value stored at `memory`
   * @return { Number }
   */

  function _recall (){
    return memory;
  }

  /**
   * Stores the value of `total` to `memory`
   */
  function _save(){
    memory = total;
  }

  /**
   * Clear the value stored at `memory`
   */
  function _clear(){
    // if (memory > 0){
    //   return memory = 0;
    // }
    memory = 0;
  }
  function validateString (fn) {
    return function(){
      if (typeof x !== "number"){
      return "Error Message";
    } else {
      return fn();
    }
  }

}
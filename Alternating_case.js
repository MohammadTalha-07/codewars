
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language;
//    see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.












String.prototype.toAlternatingCase = function () {
  // Define your method here
  //more clean solution




  return this.split("").map(x=>(x===x.toUpperCase())? x.toLowerCase(): x.toUpperCase()).join("");
}

// so first the string is split into an array with all individual characters split("");
//then each value of the array is transformed or checked for condition via .map
// when we use {} after the argument x it is important to include the return statement
//if the statement is only on one line then it is automatically assumed to be returned
//after condition check the array is again joined to the string but this time the condition
//that is defined in the map array is applied and we get the desired outcome

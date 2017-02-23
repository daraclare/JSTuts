
// == vs ===
console.log("== vs ===");

//==
  //'Abstract' equality - Checks that the value matches

   console.log(3 == "3"); //true


//===
  // Strict equality - Checks that the value and type matches
  // The strict equality operator === only considers values equal that have the same type.
  // Strict equality will return false if the types are different.

   console.log(3 === "3"); //false
   console.log("3" === "3"); //true


// Recommend to use === and !== to prevent from unexpected and wrong output.
// When comparing two variables of same data type, both operator takes almost equal time. But if type are not same triple equals operator will be faster because it would not try to convert the types of variable causing it sooner to exit than double equals operator.
// Examples of performance : http://jsperf.com/triple-equals-vs-double-equals-performance/2

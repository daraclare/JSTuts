// Undefined vs Null

console.log("undefined vs null");

//UNDEFINED
// Undefined - variable has been declared but not been assigned any value.
// Unassigned variables are initialized by JavaScript with a default value of undefined.
let example;
  console.log(example);


//NULL
// Null is an assignment value.
// It can be assigned to a variable as a representation of no value.
// Javascript never sets a value to null - this must be done programatically
// Null is a special object because typeof null returns 'object'.

example={};
  console.log(example);  // -> Object {} JS knows it is an object.

example={};
  example.name=null;
  console.log(example);   // -> Object {} JS knows it is an object.
  console.log(example.name); // -> null value of member name of Object is null.

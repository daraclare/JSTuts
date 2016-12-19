//1. object.assign()
// It is used for returning an new object with the combiniation value of numerable's properties
// The value would be overwritten with same key
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }


//2. What does the Ellipsis (the spread operator) do in this code:

const array = ['This ', 'is ', 'an ', 'array' ]
console.log(...array)

//The spread operator is used for array construction and destructuring,
//and to fill function arguments from an array on invocation.

//3. Write a function which returns the factorial of the parameter being passed
//i.e. FirstFactorial(4) should return 24 (4*3*2*1 =24)
function FirstFactorial(num) {
    if (num < 0) throw "There is a negative number passed";
    return (num <= 1) ? 1 : FirstFactorial(num - 1) * num;
}

//4. Write a function which returns the reverse of a string given as a parameter being passed
//i.e. reverse('hello') should return 'olleh'
function reverse (string) {
  let arr = Object.assign([], string);
  return arr.reverse().toString().replace(/,/g, '');//return arr.reverse().join('');
  //return s.split('').reverse().join('');
}

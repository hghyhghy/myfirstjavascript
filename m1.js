// to declare a varibale in which  we  will change data , we use let

let a = 23;

let b = 12;

//declaring age

let age = 28;

//declaring name

let name = 'subham';

// to declare a varibale in which  we  will not change data , we use const

const gender = 'Male';

//printing the output
console.log('a+b is ', a + b);

console.log('age is ', age, 'name is ', name);

console.log('gender is', gender);

//we can start declaring a varibale by _,$ sign

const $address = 'KOLKATA';

console.log('address is ', $address);

let c = 56;

let d = 45;

let z = c + d;

z = 'Sayantani';

//to print the type of the variable we use typeof

console.log('So the type of the variable is ', typeof z);

//method to change number to string

let $x = 23;

console.log('the value is ', $x);

console.log('the type of the variable is ', typeof $x);

$x = String($x);

console.log('the type of the variable is ', typeof $x);

let _a = true;

_a = Boolean(_a);

console.log('the type of it is ', typeof _a);

a = 'sarkar';

a = Boolean(a);

console.log('the value of the string is ', a);

console.log('the type of the variable is ', typeof a);

//operators and operand

const firstnumber = 8;

const secondnumber = 8;

console.log('x+y is ', firstnumber + secondnumber);

//increment operator

a = 8;

a = ++a;

console.log('the incremented values is ', a);

//exponential operator

a = 3;
b = 4;

console.log('result is ', a ** b);

//increment operator in new form

let thirdnumber = 5;

thirdnumber += 6;

console.log('the number is', thirdnumber);

//use of ===

a = 45;

b = '45';

const result = a === b;

console.log(result);

//logical not operator

a = true;

b = false;

console.log(!a);

console.log(!b);

//if else statement

let _age = 19;

if (_age >= 18) {
  console.log('you can vote');
} else {
  console.log('ÿou can not vote');
}

//ternary operator

const marks = 79;

const $result = marks >= 70 ? 'GRADE A+' : 'GRADE A';

console.log($result);

//switch case statement in javascript

const grade = 'A';

switch (grade) {
  case 'A':
    console.log('AN EXCELENT START');

    break;

  case 'B':
    console.log('GOOD KEEP LEARING');

    break;

  case 'C':
    console.log('A BETTER TRY NEXT TIME ');

    break;

  case 'D':
    console.log('NEEDS IMPROVEMENT ');

    break;
}

x = 67;

v = 90;

myfunc(x, v);

//javascript function to * two numbers

function myfunc(p1, p2) {
  const sum = p1 + p2;

  console.log('result is', sum);
}

//creating object in javascript

const person = { firstname: 'SUBHAM', lastname: 'SARKAR' };

console.log(person);

//array objects

const cars = ['BMW', 'PORSCHE', 'TATA'];

console.log(cars);

//to store a huge integr number we use bigInt

let _x = BigInt('897983457837838559898');

console.log(_x);

//converting function into a varible

const square = function (s1, s2) {
  return s1 * s2;
};

//calling the function

console.log(square(4, 5));

function $myfunc(a, b) {
  const sa = f1(a);

  const sb = f1(b);

  function f1(num) {
    return num * num;
  }

  return sa + sb;
}

console.log($myfunc(3, 4));

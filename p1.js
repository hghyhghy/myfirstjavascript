let a = 'SUBHAM';

// nn bb ss u- primitive datatypes

let b = 564;

console.log(typeof a);

console.log(typeof b);

// objects in js:-non primitive datatypes

const item = {
  Subham: true,
  Sarkar: false,
};
console.log(item['Subham']);

console.log(item['Sarkar']);

// create a variable of type string

let _a = 'Subham';

let _b = 9;

console.log(_a + _b);

console.log(typeof _a, typeof _b);

//creating an onject

const a1 = {
  name: 'Shardul',

  section: 1,

  isPrincipal: false,
};

//ading new item to the object

a1['friend'] = 'Swarnodip';

console.log(a1);

console.log(a1['isPrincipal']);

//printing some objects

const $item = {
  good: 'doing the best thing',

  coding: 'learning a language to interprate with computer',

  exam: 'place to think',
};

console.log($item.coding);

// basic problem sets

// let age = prompt('Enter Your Age');

// //to convert anything into integer

// age = Number.parseInt(age);

// if (age > 10 && age <= 20) {
//   console.log('Your age lies between 10 and 20');
// } else {
//   console.log('Your age does not lies between 10 and 20');
// }

let $age = prompt('what is your age?');

switch ($age) {
  case '1':
    console.log('your age lies between 10 to 13');

    break;

  case '2':
    console.log('your age lies between 14 to 16');

    break;

  case '3':
    console.log('your age lies between 17 to 19');

    break;

  default:
    console.log('Your age is not special');
}

// checking wheather a number is divisible by 2 and 3

let num = prompt('Enter the number you want');

num = Number.parseInt(num);

if (num % 2 == 0 && num % 3 == 0) {
  console.log('your number is divisible by 2 and 3');
} else {
  console.log('your number is  not divisible by 2 and 3');
}

let _num = prompt('enter your number');

_num = Number.parseInt(_num);

if (_num % 2 == 0 || _num % 3 == 0) {
  console.log('Your numbre is divisible by either 2  or 3');
} else {
  console.log('Your numbre is  not divisible by either 2  or 3');
}

// using ternary operator

let umar = 19;

let a2 = umar > 18 ? 'You Can Drive' : ' You Cannot Drive';

console.log(a2);

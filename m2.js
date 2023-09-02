//normal function

function greet() {
  console.log('Hello JS');
}

greet();

//arrow function

const love = () => {
  for (let i = 0; i <= 3; i++) {
    console.log('Hello Js');
  }
};

love();

//expression function

const my = (number) => number * number;

console.log(my(3));

//callback function  : when we pass a function as a parameter in other function that is called call back function

const m = (a, b, operation) => {
  return operation(a, b);
};

//method 1

const add = m(6, 7, function (num1, num2) {
  return num1 + num2;
});

console.log(add);

//mathod 2

const sub = (a, b) => a - b;

const subresult = m(8, 3, sub);

console.log(subresult);

//method 3

function $(a, b) {
  return a * b;
}

const mul = m(10, 10, $);

console.log(mul);

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 9, -7];

const firstnegative = (num) => {
  return num < 0;
};

const result = a.find(firstnegative);

console.log(result);

const $result = a.findIndex(firstnegative);

console.log($result);

// iterating in an array

a.forEach((num, i) => {
  console.log('array is ', num, i);
});

//set timeout function

console.log('My name');

console.log('is ');

setTimeout(function () {
  console.log('The ShowStopper ');
}, 5000);

console.log('Subham Sarkar');

function getfood() {
  setTimeout(() => {
    const food = '🥑';

    console.log('your food is here ', food);
  }, 4000);
}

console.log(getfood());

function getdough(food) {
  setTimeout(() => {
    const total = food + '🦴';

    console.log('here is the whole preparation', total);
  }, 6000);
}

console.log(getdough());

//promise function

const ticket = new Promise(function (resolve, reject) {
  const isboarded = true;

  if (isboarded) {
    resolve('You are in the flight');
  } else {
    reject('we are sorry ! your flight has been cancelled ');
  }
});

//then is used when a promise is successfully resolved

ticket.then((data) => {
  console.log('Good job');
});

// catch is used when a promise is not fullfilled

ticket.catch((data) => {
  console.log('OH no!');
});

function getitem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = '❤️';

      console.log('the item is ', item);

      resolve(item);
    }, 3000);
  });
}

console.log(getitem());

function getcall(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const call = getitem + '💕';

      console.log('the item is ', call);

      resolve(call);
    }, 3000);
  });
}

console.log(getcall());

//async await

async function create() {
  const item = await getitem();

  console.log('here is ur item');

  const call = await getcall(item);

  console.log('here is ur call');
}

create();

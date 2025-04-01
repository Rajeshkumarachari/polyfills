//% flatten Array

function flattenArray(arr) {
  let newFlattenArray = [];
  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        helper(arr[i]);
      } else {
        newFlattenArray.push(arr[i]);
      }
    }
  }
  helper(arr);
  return newFlattenArray;
}
const array = [1, [2], [3, [4, 5, [6, [7, [8, [9]]]]]], [10]];
console.log(flattenArray(array));

//%factorial

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//%polyfill for Map

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const num = [1, 2, 3];
const newNum = num.myMap((num) => {
  return num * 3;
});
console.log("map", newNum);

//%polyfill for Filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let result = num1.myFilter((num) => {
  return num > 10;
});

console.log(result);

//%polyfill for Reduce

Array.prototype.myReduce = function (cb, init) {
  var accumulator = init;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const num2 = [1, 2, 3, 4, 5];
const reduceValue = num2.myReduce((acc, curr, i, arr) => {
  return acc + curr;
});
console.log(reduceValue);

//%polyfill for Call
let car = {
  color: "Red",
  company: "BMW",
};
function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color}- ${this.company} Car for ${currency} ${price}`
  );
}

purchaseCar(car, "₹", 5000000);

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " this is not callable");
  }
  context.fn = this;
};

//%isPalindrome

console.log(newNum);
const isPalindrome = function (x) {
  if (x < 0) return 1;
  let org = x;
  let reversed = 0;
  while (x > 0) {
    let digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }
  return org === reversed;
};
console.log(isPalindrome(12321));

//% Fibonacci Number

var fibonacciNumber = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};
console.log(fibonacciNumber(12));

const fib = function (n) {
  if (n <= 1) return n;
  let res = fib(n - 1) + fib(n - 2);
  return res;
};
console.log(fib(7));

// Valid Anagram

let name = "RAJESH";
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

const isAnagram = function (s, t) {
  s = s.split("").sort().join();
  t = t.split("").sort().join();
  return s === t;
};
const isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

console.log(typeof typeof isAnagram("rajesh1", "rjaes1h"));

function findIndex(num, target) {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] == target) return [i, j];
    }
  }
}

function findIndex(num, target) {
  var obj = {};
  for (let i = 0; i < num.length; i++) {
    var n = num[i];
    if (obj[target - n] > 0) {
    }
  }
}

let res = findIndex([1, 2, 3, 4, 5, 5, 6], 9);
console.log(res);

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i]), i, this);
  }
  return temp;
};

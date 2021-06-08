"use strict";
// console.log("Assignment 1");

Array.prototype.asyncFind = async function (fn) {
  for (let i = 0; i <= this.length; i++) {
    if (await fn(this[i])) {
      return this[i];
    }
    if (i === this.length) {
      return new Error("No odd elements.");
    }
  }
};

const result_assign1 = [28, 2, 41, 3].asyncFind(async (item) => {
  await new Promise((res) => setTimeout(res, item * 100));
  return item % 2 === 1;
});

result_assign1
  .then((item) => console.log("Assignment 1 result = " + item))
  .catch((err) => console.error(err));

// console.log("Assignment 2");

Array.prototype.asyncMap = async function (fn) {
  const array = [];
  for (let i = 0; i <= this.length; i++) {
    if (await fn(this[i])) {
      array.push(this[i]);
    }
    if (i === this.length) {
      return array;
    }
  }
};

const result_assign2 = [28, 2, 41, 3].asyncMap(async (item) => {
  await new Promise((res) => setTimeout(res, item * 100));
  return item % 2 === 1;
});
result_assign2.then((item) => console.log(item));

// console.log("Assignment 3");
const promisify = function (value, fn) {
  return new Promise((resolve, reject) => {
    fn(value, (err, message) => {
      if (err) reject(err);
      else resolve(message);
    });
  });
};

function myFunc(time, callback) {
  setTimeout(function () {
    callback(null, "Success");
  }, time * 1000);
}
const promise = promisify(4, myFunc);

promise.then((res) => console.log(res)).catch((err) => console.error(err));

//Without Promise
// myFunc(2, (err, message) => {
//   console.log(message);
// });

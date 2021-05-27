"use strict";
const assign_1 = document.querySelector("#a1");
const assign_2 = document.querySelector("#a2");
const assign_3 = document.querySelector("#a3");

assign_1.addEventListener("click", (e) => {
  e.preventDefault();

  // const obj = Object.fromPairs([[a, 1], [b, 2]]);
  //        output: obj - > { a: 1, b: 2 };

  console.log("Assignment 1");
  //Edit the array here
  const ar = [
    ["a", 1],
    ["b", 5],
    ["c", 2],
  ];
  const obj = {};
  ar.flat().map((el, i, arr) => {
    let a = i - 1;
    i % 2 === 0 ? (obj[el] = "") : (obj[arr[a]] = el);
  });
  console.log("The given array was ");
  console.log(ar);
  console.log("The converted object is ");
  console.log(obj);
});

assign_2.addEventListener("click", (e) => {
  e.preventDefault();
  // var arr = [1, 2, 5, 4, 6];
  // const secondHighestValue = arr.getSecondMax();

  console.log("Assignment 2");
  //Edit the array here
  const ar = [100, 200, 5, 10, 186, 4, 6];
  Array.prototype.secondHighestValue = function () {
    let max = this[1];
    let smax = this[0];
    for (let i = 2; i < this.length; i++) {
      if (max < smax) {
        let temp = max;
        max = smax;
        smax = temp;
      }
      if (this[i] > max) {
        smax = max;
        max = this[i];
      }
      if (this[i] > smax && smax < max) {
        smax = this[i];
      }
    }
    return [max, smax];
  };
  console.log("The max number is " + ar.secondHighestValue()[0]);
  console.log("The second max number is " + ar.secondHighestValue()[1]);
});

assign_3.addEventListener("click", (e) => {
  e.preventDefault();
  // extends(A, B);   - extends functionality in ES5

  console.log("Assignment 3");
});

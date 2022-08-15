"use strict";
console.clear();

/**
 * Q1 Construct the following pattern: 

*
* *  
* * *  
* * * * 

 */

for (let i = 0; i <= 4; i++) console.log(new Array(i).fill("*").join(" "));

/**
 * Q2 - resolved in mentoring class with Arif.
 */
const ARR = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
for (let i = 0; i < ARR.length; i++) {
  console.log(`Row ${i}:`);
  for (let j = 0; j < ARR[i].length; j++) {
    console.log(`${ARR[i][j]}`);
  }
}
// another solution, using for...of and for...in combined
// for (let i in ARR) {
//   console.log(`Row ${i}:`);
//   for (let j of ARR[i]) {
//     console.log(`${j}`);
//   }
// }

/**
 * Q3: - resolved in mentoring class with Arif.
 */
let arrayQ3a = [];
for (let i = 1; i <= 4; i++) {
  for (let y = 1; y <= 3; y++) {
    arrayQ3a.push(i);
  }
}

let arrayQ3b = [];
for (let i = 0; i <= 2; i++) {
  for (let j = 0; j < 5; j++) {
    arrayQ3b.push(j);
  }
}

console.log(arrayQ3a.join(" "));
console.log(arrayQ3b.join(" "));

// Bonus - resolved in mentoring class with Arif.

let arr1 = [];
let arr2 = [];
for (let i = 0; i <= 4; i++) {
  if (i > 0) {
    for (let y = 1; y <= 3; y++) {
      arr1.push(i);
    }
  }
  if (i < 3) {
    for (let j = 0; j < 5; j++) {
      arr2.push(j);
    }
  }
}
console.log(arr1.join(" "));
console.log(arr2.join(" "));

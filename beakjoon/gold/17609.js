let fs = require("fs");
let [n, ...words] = fs
  .readFileSync("example.txt")
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n")
  .map((i) => i.split(""));

let check = [];
let answer = [];
let arr1 = [];
let arr2 = [];

for (let word of words) {
  
  let checkLen = 0;
  if (word.length % 2 == 0) {
    checkLen = word.length / 2 - 1;
  } else {
    checkLen = Math.floor(word.length / 2) - 1;
  }
  
  for (let i = 0; i <= checkLen; i++) {
    arr1.push(word[i]);
    arr2.push(word[word.length - 1 - i]);
  }
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] == arr2[j]) {
      check.push(true)
    }
  }
  if (arr1.length - check.length == 0) {
    answer.push(0)
  } else if (arr1.length - check.length == 1) {
    answer.push(1)
  } else {
    answer.push(2)
  }
console.log(arr1, arr2)
  arr1 = [];
  arr2 = [];
  check= [];
}
console.log(answer)



// const check = (word) => {
//   let checkLen = 0;
//   if (word.length % 2 == 0) {
//     checkLen = word.length / 2 - 1;
//   } else {
//     checkLen = Math.floor(word.length / 2) - 1;
//   }
//   for (let i = 0; i <= checkLen; i++) {
//     if (word[i] == word[word.length - i - 1]) {
//       answer.push(true);
//     } else {
//       if (word[i] == word[word.length - i - 2]) {

//       }
//       else if ( word[i + 1] == word[word.length - i - 1]) {

//       }
//     }
//   }
//   if (answer.includes(false)) {
//     answer = []
//     return console.log(2);
//   } else {
//     answer = []
//     console.log(0);
//   }
// };

// for (let word of words) {
//   check(word)
// }

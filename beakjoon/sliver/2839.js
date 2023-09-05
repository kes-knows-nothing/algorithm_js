const n = require("fs").readFileSync("/dev/stdin").toString().trim();
const k = parseInt(n)
let answer = 0;

for (let i = 0; i <= k / 5; i++) {
    let rest = n - 5*i
    if (rest % 3 == 0) {
        answer = (i + rest / 3)
    } 
}

if (answer == 0) {
    answer = -1
}

console.log(answer)
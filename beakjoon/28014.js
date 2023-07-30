const fs = require("fs");
const [n, ...arr] = fs.readFileSync("example.txt").toString().trim().split(/\s/);
let knock = 1;
for (let i = 1; i < n-1 ; i++) {
    if (arr[i] <= arr[i+1]) {
        knock += 1
    }
}

if (arr[n-1] >= arr[n-2]) {
    knock += 2
}

console.log(knock)

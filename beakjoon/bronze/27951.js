const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const shirt = input[2][0];
const pants = input[2][1];

let shirtHang = 0

for (i of input[1]) {
    if(i === 1) {
        shirtHang++
    }
}

console.log(shirtHang)

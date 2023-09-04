const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

  const list = arr.map((i) => i.split(" "));

  function compare(a, b) {
    if (Number(a[0]) < Number(b[0])) {
      return -1;
    } else if (Number(a[0]) > Number(b[0])) {
      return 1;
    } else {
      if (list.indexOf(a) < list.indexOf(b)) {
        return -1;
      } else {
        return 1;
      }
    }
  }
  
  const sorted = list.sort(compare);
  
  let answer = "";
  
  sorted.map((i) => (answer += i[0] + " " + i[1] + "\n"));
  
  console.log(answer);

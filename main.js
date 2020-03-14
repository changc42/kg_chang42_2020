let s1 = process.argv[2];
let s2 = process.argv[3];

let set = new Set();

let s1Arr = s1.split("");
s1Arr.forEach(ch => {
  set.add(ch);
});

console.log(set);

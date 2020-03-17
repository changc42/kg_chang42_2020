/*
my understanding of problem:
one-to-one mapping exists if all of the following are true:
  1. s1 contains all unique characters
  2. s1.length = s2.length
*/

let s1 = process.argv[2];
let s2 = process.argv[3];

let isAllUnique = true;
for (let i = 0; i < s1.length; i++) {
  for (let j = i + 1; j < s1.length; j++) {
    if (s1.charAt(i) === s1.charAt(j)) {
      isAllUnique = false;
      break;
    }
  }
  if (!isAllUnique) break;
}

if (!isAllUnique) console.log(false);
else console.log(s1.length === s2.length);

// Challenge 052: Recursive Sum 🧮
// Read challenge.md first. No for, no while.

function sumTo(n) {
  // ✏️ your code here
  if (n === 1) {
    return 1;
  }
  
  return n + sumTo(n - 1);
}

// See it work: remove the // from the next line...
// console.log(sumTo(100));
// ...then run: node challenges/052-recursive-sum/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { sumTo };

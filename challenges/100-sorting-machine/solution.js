// Challenge 100: The Sorting Machine 🏆
// Read challenge.md first. No .sort() today. You ARE .sort() today.

function sortStep(numbers) {
  // ✏️ your code here (one pass: compare neighbors, swap when needed)

}

function bubbleSort(numbers) {
  // ✏️ your code here (enough passes of sortStep, then return)

}

// See it work: remove the // from the next line...
// console.log(bubbleSort([38, 7, 92, 55, 1]));
// ...then run: node challenges/100-sorting-machine/solution.js
// Then the real reward: open index.html in your browser. 🏆

// This part connects your code to the tests AND keeps the browser happy.
// Leave it alone!
if (typeof module !== "undefined") {
  module.exports = { sortStep, bubbleSort };
}

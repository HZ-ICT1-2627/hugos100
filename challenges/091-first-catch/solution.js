// Challenge 091: First Catch 🥅
// Read challenge.md first.

// This one is finished. Use it, don't change it.
function launchRocket(fuel) {
  if (fuel < 100) {
    throw new Error("Not enough fuel.");
  }
  return "Liftoff!";
}

function safeLaunch(fuel) {
  // ✏️ your code here

}

// See it work: remove the // from the next line...
// console.log(safeLaunch(10));
// ...then run: node challenges/091-first-catch/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { launchRocket, safeLaunch };

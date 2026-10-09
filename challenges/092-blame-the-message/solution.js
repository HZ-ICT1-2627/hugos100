// Challenge 092: Blame the Message 📩
// Read challenge.md first.

// This one is finished. Use it, don't change it.
function readDiary(page) {
  if (page === 13) {
    throw new Error("Page 13 is glued shut.");
  }
  if (page > 30) {
    throw new Error("That page is blank.");
  }
  return `Dear diary, day ${page} was fine.`;
}

function tryRead(page) {
  // ✏️ your code here

}

// See it work: remove the // from the next line...
// console.log(tryRead(13));
// ...then run: node challenges/092-blame-the-message/solution.js

// This line connects your code to the tests. Leave it alone!
module.exports = { readDiary, tryRead };

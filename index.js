function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('')
  return(reversedWord === word)
}

/* 
  Add your pseudocode here
*/
// create a function of 'isPalindrome' with a parameter of 'word.
// make it so its able to accept words that are spelt the same forward and backwards.
// if a word  is the same forward and backwords is true, if not false!
// combine the 3 methods to reverse a string using .split(''), .reverse(), .join('')

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"))

  console.log("Exoecting: true");
  console.log("=>", isPalindrome("level"))
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("rock"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tower"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

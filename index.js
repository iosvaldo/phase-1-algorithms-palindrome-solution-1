function isPalindrome(word) {
  // Write your algorithm here
  return word.split('').reverse().join('') === word ? true : false
}

/* 
  Add your pseudocode here
  Reverses a string
  if the reversed string 
  is equal to the original string, 
  then it returns true otherwise,
  it returns false.
*/

/*
  Add written explanation of your solution here
  To reach the reversed string, 
  first split the string into an 
  array of the letters, reverse the letters, and
  finally rejoin the letters to a string again.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

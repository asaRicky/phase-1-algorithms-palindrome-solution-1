function reverseString(word) {
  // create an array from the input string
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  if (word === reversedWord) {
    return true;
  }else {
    return false;
  }
}

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  when writing this code if the string of word is a palindrome it returns true
  if the string of words is not a palindrome it should return a false
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

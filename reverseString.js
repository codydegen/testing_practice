function reverseString(string) {
  reversedString = string.split('').reverse().join('');
  console.log(reversedString);
  return reversedString;
};

module.exports = reverseString;
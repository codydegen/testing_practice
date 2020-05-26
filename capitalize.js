function capitalize(string) {
  const firstLetter = string[0].toUpperCase();
  const remainingString = string.slice(1);
  return firstLetter + remainingString;

};
module.exports = capitalize;
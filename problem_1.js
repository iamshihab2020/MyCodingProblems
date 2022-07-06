/**
 * 
 ** Write a function that takes a word and returns the new word without including the first two characters
 * ! Example:
 * ? newWord("array") -> "ray"
 */

var newWord = (word) =>{
  const part = word.substring(2);
  return part;
}
console.log(newWord("array"));
console.log(newWord("object"));
console.log(newWord("google"));
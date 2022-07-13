/**
 ** Write a function that takes an array of strings and numbers and filters out the array so that it returns an array integers only
 * ! Example:
 * ? filteredArra([2,5,1,'h','l',4]) --> [2,5,1,4]
 */

function filteredArea(array){
  let newArray = [ ];

  for(let i = 0 ; i < array.length ; i++){
    if(typeof array[i] == 'number'){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(filteredArea( [2,5,1,"h","l",4] ))
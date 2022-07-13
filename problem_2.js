/**
 ** Write a function that takes an array and return a reverse array
 *!Note: The function cannot change the main array and you cannot use any array methods.
 * ! Example:
 * ? let arr = [5,1,3,4,8]
 * ? reverseArray(arr) ==> [8,4,3,1,5]
 */

function reverseArray(array){
  let  index = 0;
  const arr  = [];

  for(let i = array.length - 1 ; i >= 0 ; i--){
    arr[index] = array[i];
    index++;
  }
  return arr;
}

console.log(reverseArray ( [5,1,3,4,8] ) );
// CHALLENGE 7 LONGEST WORD
// return the longest word in a string

function longestWord(str) {
  let maxLength = 0;
  let longestWord = '';
  let myArr = str.split(' ');
  for(let i =0; i < myArr.length; i++) {
    if(myArr[i].length > maxLength) {
      maxLength = myArr[i].length
      longestWord = myArr[i];
    }
  }
  return longestWord;
}

// console.log(longestWord('hey marty carpool'));
// CHALLENGE 5 MAX CHARACTER
// return a character that is the most common in a string

function maxCharacter(str) {
    let myObj = {};
    let myStr = str.toLowerCase().split('').sort().join('');
    let maxNum = 0;
    let maxChar = '';
    for(let i = 0; i < myStr.length; i++) {
        if(myObj[myStr[i]]) {
            myObj[myStr[i]]++;
        } else {
            myObj[myStr[i]] = 1;
        }
    }
    for(let val in myObj) {
        if(myObj[val] > maxNum) {
            maxNum = myObj[val];
            maxChar = val;
        }
    }
    return maxChar;
}
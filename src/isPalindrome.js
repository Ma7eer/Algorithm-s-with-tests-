// VALIDATE A PALINDROME
// return true if palindrome and false if not
function isPalindrome(str) {
    // convert string to array
    let myArr = str.toLowerCase().replace(/[\s,-:]/g, "").split('');
    let front =  myArr.slice(0, myArr.length/2);
    // check if array length is even or odd and if it is an empty array or not
    if(myArr.length % 2 === 0 && myArr.length > 0) {
        var back = myArr.slice(myArr.length/2, myArr.length).reverse();
        if(front.join('') === back.join('')) { // compare front of the word with the end of it
            return true;
        }
    } else if(myArr.length % 2 !== 0 && myArr.length > 0) { // check if odd
        var back = myArr.slice((myArr.length/2+1), myArr.length).reverse();
        if(front.join('') === back.join('')) { // compare front of the word with the end of it
            return true;
        }
    }
    return false;
}

function isPalindrome2(str) {
    const revString = str.split('').reverse().join('').replace(/\s/g, "");
    return str.toLowerCase() === revString.toLowerCase();
}

console.log(isPalindrome2('A SANTA LIVED AS A DEVIL AT NASA'));
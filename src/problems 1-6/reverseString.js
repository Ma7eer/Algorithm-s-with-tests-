// CHALLENGE 1: Reverse a string
// return a string in reverse


// using traditional for loop
function reverseString1(str) {
    // split the string
    // add them to an array
    let arr  = str.split('');
    // loop through array and insert items in reverse
    let newArr = [];
    for(let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    // merge array to a single string
    return newArr.join('');
}

// using array and string methods
function reverseString2(str) {
    return str.split('').reverse().join('');
}

// using for of loop
function reverseString3(str) {
    let revString = '';
    for(let char of str) {
        revString = char + revString;
    }
    return revString;
}

// using for each
function reverseString4(str) {
    let revString = '';
    str.split('').forEach(char => revString = char + revString);
    return revString;
}

// using reduce
function reverseString5(str) {
    return str.split('').reduce((acc, next) => {
        return next + acc;
    }, '');
}
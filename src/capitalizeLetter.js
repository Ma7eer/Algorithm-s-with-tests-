// CHALLENGE 4 CAPITALIZE LETTER
// write a function that accepts a string and returns the first letter of
// every word capitalized

function capitalizeLetter1(str) {
    let myArr = [];
    str.toLowerCase().split(' ').forEach((el) => {
        let val = el.replace(el[0], el[0].toUpperCase());
        myArr.push(val);
    })
    return myArr.join(' ');
}

function capitalizeLetter2(str) {
    let arr = str.toLowerCase().split(' ');
    arr.forEach((value, index, array) => {
        array[index] = array[index].substring(0, 1).toUpperCase() +
        array[index].substring(1);
    });
    return arr.join(' ');
}

function capitalizeLetter3(str) {
    return str.toLowerCase().split(' ').map(val => val[0].toUpperCase() + val.substring(1)).join(' ');
}
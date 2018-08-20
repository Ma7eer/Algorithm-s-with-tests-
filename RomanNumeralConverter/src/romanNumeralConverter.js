const numerals = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
};

function romanNumeralConvert(num) {
  // get highest decimal number of num
  switch(num.toString().length) {
    case 1:
    return '1';

    case 2:
    return '10';
  }
  // get heighest roman numberal for the heighest decimal
  // subtract the heighest decimal from our num
  // iterate till num === 0
  // as u iterae concate the roman numeral value
}

console.log(romanNumeralConvert(1));
console.log(romanNumeralConvert(3));
console.log(romanNumeralConvert(42));
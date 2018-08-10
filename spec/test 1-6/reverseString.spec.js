// using traditional for loop
describe('reverseString', function() {
  it('reverses strings using traditional for loop', function() {
    expect(typeof(reverseString1('Bye'))).toBe(typeof('Bye')); // to be a string
    expect(reverseString1('hello')).toBe('olleh'); // to reverse a string
    expect(reverseString1('')).toBe(''); // to return an empty string if given an empty one
  })
  it('reverses strings using array and string methods', function() {
    expect(typeof(reverseString2('Bye'))).toBe(typeof('Bye')); // to be a string
    expect(reverseString2('hello')).toBe('olleh'); // to reverse string
    expect(reverseString2('')).toBe(''); // return an empty string if given one
  })
  it('reverses strings using for of loop', function() {
    expect(typeof(reverseString3('Bye'))).toBe(typeof('Bye')); // to be a string
    expect(reverseString3('hello')).toBe('olleh'); // to reverse string
    expect(reverseString3('')).toBe(''); // return an empty string if given one
  })
  it('reverses strings using forEach', function() {
    expect(typeof(reverseString4('Bye'))).toBe(typeof('Bye')); // to be a string
    expect(reverseString4('hello')).toBe('olleh'); // to reverse string
    expect(reverseString4('')).toBe(''); // return an empty string if given one
  })
  it('reverses strings using reduce', function() {
    expect(typeof(reverseString5('Bye'))).toBe(typeof('Bye')); // to be a string
    expect(reverseString5('hello')).toBe('olleh'); // to reverse string
    expect(reverseString5('')).toBe(''); // return an empty string if given one
  })
});
describe('isPalindrome', function() {
    it('returns true if word is a Palindrome', function() {
        expect(isPalindrome('abba')).toBe(true); // even palindrome
        expect(isPalindrome('racecar')).toBe(true); // odd palindrome
        expect(isPalindrome('ABLE WAS I ERE I SAW ELBA')).toBe(true); // sentences with spaces
        expect(isPalindrome('ABba')).toBe(true); // uppercase compared to lowercase
        expect(isPalindrome('A SANTA LIVED AS A DEVIL AT NASA')).toBe(true); // varying spacing between words
        expect(isPalindrome('A MAN, A PLAN, A CANAL : PANAMA')).toBe(true); // with punctuation
    });
    it('returns false if word isn\'t a Palindrome', function() {
        expect(isPalindrome('cat')).toBe(false); // not a palindrome
        expect(isPalindrome('')).toBe(false); // empty string
        expect(isPalindrome('anastasia')).toBe(false); // not a palindrome but 1st and last value are equal
        expect(isPalindrome('ABCDECBA')).toBe(false); // all values equal expect middle two
    })
})
describe('Roman Numeral Converter', function() {
    it('returns a Roman Symbols', function() {
        expect(romanNumeralConvert(1)).toBe("I");
        expect(romanNumeralConvert(5)).toBe("V");
        expect(romanNumeralConvert(10)).toBe("X");
        expect(romanNumeralConvert(50)).toBe("L");
        expect(romanNumeralConvert(100)).toBe("C");
        expect(romanNumeralConvert(500)).toBe("D");
        expect(romanNumeralConvert(1000)).toBe("M");
    });
    it('returns a Roman Basic Combinations', function() {
        expect(romanNumeralConvert(2)).toBe("II");
        expect(romanNumeralConvert(7)).toBe("VII");
        expect(romanNumeralConvert(20)).toBe("XX");
        expect(romanNumeralConvert(60)).toBe("LX");
        expect(romanNumeralConvert(200)).toBe("CC");
        expect(romanNumeralConvert(400)).toBe("CD");
        expect(romanNumeralConvert(900)).toBe("CM");
    });
    it('returns a Roman Numeral for complex numbers', function() {
        expect(romanNumeralConvert(1984)).toBe("MCMLXXXIV");
    });
})
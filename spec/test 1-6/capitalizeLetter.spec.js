describe('capitalize Letter', function() {
    it('capitalizes the first letter of every word  using replace', function() {
        expect(capitalizeLetter1('hello world')).toBe('Hello World');
        expect(capitalizeLetter1('Hello World')).toBe('Hello World');
        expect(capitalizeLetter1('HELLO WORLD')).toBe('Hello World');
        expect(capitalizeLetter1('hello')).toBe('Hello');
        expect(capitalizeLetter1('h')).toBe('H');
    });
    it('capitalizes the first letter of every word using subString', function() {
        expect(capitalizeLetter2('hello world')).toBe('Hello World');
        expect(capitalizeLetter2('Hello World')).toBe('Hello World');
        expect(capitalizeLetter2('HELLO WORLD')).toBe('Hello World');
        expect(capitalizeLetter2('hello')).toBe('Hello');
        expect(capitalizeLetter2('h')).toBe('H');
    });
    it('capitalizes the first letter of every word using map', function() {
        expect(capitalizeLetter3('hello world')).toBe('Hello World');
        expect(capitalizeLetter3('Hello World')).toBe('Hello World');
        expect(capitalizeLetter3('HELLO WORLD')).toBe('Hello World');
        expect(capitalizeLetter3('hello')).toBe('Hello');
        expect(capitalizeLetter3('h')).toBe('H');
    });
});
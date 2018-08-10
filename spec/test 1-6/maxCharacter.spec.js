describe("Max Character", function() {
    it('returns the character that is most common in a string', function() {
        expect(maxCharacter('door')).toBe('o');
        expect(maxCharacter('')).toBe('');
        expect(maxCharacter('AAbBBC')).toBe('b');
    })
})
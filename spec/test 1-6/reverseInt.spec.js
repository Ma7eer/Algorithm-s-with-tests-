describe('Reverse integers', function() {
    it('reverses positive integers', function() {
        expect(reverseInt(12345)).toBe(54321);
        expect(reverseInt(1)).toBe(1);
    })
    it('reverses negative integers', function() {
        expect(reverseInt(-123)).toBe(-321);
    })
})
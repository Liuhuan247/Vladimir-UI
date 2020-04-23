test('test is matcher', () => {
    expect(2 + 2).toBe(4);
    expect(2 + 2).not.toBe(3);
})

test('test to be true or false', () => {
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
})

test('test to be number', () => {
    expect(4).toBeGreaterThan(3);
    expect(3).toBeGreaterThanOrEqual(3);
    expect(2).toBeLessThan(5);
})

test('test object', () => {
    expect({name: 'vladimir'}).toEqual({name: 'vladimir'});
})
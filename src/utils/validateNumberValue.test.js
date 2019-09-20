import validateNumberValue from './validateNumberValue';

describe('testing validateNumberValue function', () => {
  test('function should work correct', () => {
    expect(validateNumberValue(1000, 0, 100)).toBe(100);
    expect(validateNumberValue(99, 0, 100)).toBe(99);
    expect(validateNumberValue(-1, 0, 100)).toBe(0);
    expect(validateNumberValue(200, 0, 100)).toBe(100);
  });
});

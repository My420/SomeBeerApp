import * as fc from 'fast-check';
import validateNumberValue from './validateNumberValue';

describe('testing validateNumberValue function', () => {
  test('function should work correct', () => {
    expect(validateNumberValue(1000, 0, 100)).toBe(100);
    expect(validateNumberValue(99, 0, 100)).toBe(99);
    expect(validateNumberValue(-1, 0, 100)).toBe(0);
    expect(validateNumberValue(200, 0, 100)).toBe(100);
  });

  test('value should be in mix - max range', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), fc.integer(), (value, a, b) => {
        const min = a < b ? a : b;
        const max = a > b ? a : b;
        const newValue = validateNumberValue(value, min, max);

        expect(newValue >= min && newValue <= max).toBeTruthy();
      })
    );
  });

  test('value should be equal one of: value, min, max', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), fc.integer(), (value, a, b) => {
        const min = a < b ? a : b;
        const max = a > b ? a : b;
        const newValue = validateNumberValue(value, min, max);

        expect(
          newValue === min || newValue === max || newValue === value
        ).toBeTruthy();
      })
    );
  });
});

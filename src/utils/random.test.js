import * as fc from 'fast-check';
import random from './random';

describe('testing random function', () => {
  test('value should be in min - max range', () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        const min = a < b ? a : b;
        const max = a > b ? a : b;
        const value = random(min, max);

        expect(value >= min && value <= max).toBeTruthy();
      })
    );
  });
});

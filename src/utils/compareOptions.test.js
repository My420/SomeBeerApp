import * as fc from 'fast-check';
import compareOptions from './compareOptions';

describe('testing compareOptions function', () => {
  test('should return true if compare same object', () => {
    fc.assert(
      fc.property(
        fc.record({ opt1: fc.string(), opt2: fc.string(), opt3: fc.integer() }),
        obj => {
          expect(compareOptions(obj, obj)).toBeTruthy();
        }
      )
    );
  });

  test('should return false if compare 2 different objects', () => {
    fc.assert(
      fc.property(
        fc.record({ opt1: fc.string(), opt2: fc.string(), opt3: fc.integer() }),
        fc.record({
          opt1: fc.integer(),
          opt2: fc.integer(),
          opt3: fc.string()
        }),
        (obj1, obj2) => {
          expect(compareOptions(obj1, obj2)).toBeFalsy();
        }
      )
    );
  });
});

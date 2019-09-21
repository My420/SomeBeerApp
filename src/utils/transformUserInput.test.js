import * as fc from 'fast-check';
import transformUserInput from './transformUserInput';

describe('testing transformUserInput function', () => {
  test('function should work correct', () => {
    expect(transformUserInput(' test test ')).toBe('test_test');
    expect(transformUserInput('  test   test  ')).toBe('test_test');
  });

  test('string should not contain space  ', () => {
    fc.assert(
      fc.property(fc.string(), a => {
        expect(transformUserInput(a).indexOf(' ')).toBe(-1);
      })
    );
  });

  test('lorem line should not contain space  ', () => {
    fc.assert(
      fc.property(fc.lorem(5), a => {
        expect(transformUserInput(a).indexOf(' ')).toBe(-1);
      })
    );
  });
});

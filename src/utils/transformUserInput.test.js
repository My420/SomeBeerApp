import transformUserInput from './transformUserInput';

describe('testing transformUserInput function', () => {
  test('function should work correct', () => {
    expect(transformUserInput(' test test ')).toBe('test_test');
    expect(transformUserInput('  test   test  ')).toBe('test_test');
  });
});

import debounce from './debounce';

describe('test debounce function', () => {
  jest.useFakeTimers();

  let TestFunc;
  let wrapper;

  beforeEach(() => {
    TestFunc = jest.fn();
    wrapper = debounce(TestFunc, 300);
    jest.spyOn(global, 'setTimeout');
  });

  test('should call TestFucn once, when wrapper called 2 times in 100ms', () => {
    wrapper();
    expect(TestFunc.mock.calls.length).toBe(1);
    jest.advanceTimersByTime(100);
    wrapper();
    expect(TestFunc.mock.calls.length).toBe(1);
    jest.runAllTimers();
  });

  test('should call TestFunc with correct arguments', () => {
    const arg1 = 10;
    const arg2 = 'test';

    wrapper(arg1, arg2);
    expect(TestFunc.mock.calls.length).toBe(1);
    expect(TestFunc).toBeCalledWith(arg1, arg2);
  });

  test('should call TestFucn twice, when wrapper called 2 times in 500ms', () => {
    wrapper();
    expect(TestFunc.mock.calls.length).toBe(1);
    jest.advanceTimersByTime(500);
    wrapper();
    expect(TestFunc.mock.calls.length).toBe(2);
    jest.runAllTimers();
  });
});

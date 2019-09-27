import React from 'react';
import { shallow } from 'enzyme';
import Ebc from './Ebc';

describe('test <Ebc /> component', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(
    <Ebc lessValue="20" moreValue="30" onPropertyChange={mockFunc} />
  );

  beforeEach(() => {
    mockFunc.mockReset();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render  inputs with attr name='ebcLess' with correct value", () => {
    expect(wrapper.find("input[name='ebcLess']").prop('value')).toBe('20');
  });

  test("should render  inputs with attr name='ebcMore' with correct value", () => {
    expect(wrapper.find("input[name='ebcMore']").prop('value')).toBe('30');
  });

  test("should call onPropertyChange prop when inputs with attr name='ebcLess' change", () => {
    wrapper
      .find("input[name='ebcLess']")
      .simulate('change', { target: { value: '40', name: 'ebcLess' } });
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toBe('40');
  });

  test("should call onPropertyChange prop when inputs with attr name='ebcMore' change", () => {
    wrapper
      .find("input[name='ebcMore']")
      .simulate('change', { target: { value: '10', name: 'ebcMore' } });
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toBe('10');
  });
});

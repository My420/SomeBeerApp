import React from 'react';
import { shallow } from 'enzyme';
import Abv from './Abv';

describe('test <Abv /> component', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(
    <Abv lessValue="20" moreValue="30" onPropertyChange={mockFunc} />
  );

  beforeEach(() => {
    mockFunc.mockReset();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render  inputs with attr name='abvLess' with correct value", () => {
    expect(wrapper.find("input[name='abvLess']").prop('value')).toBe('20');
  });

  test("should render  inputs with attr name='abvMore' with correct value", () => {
    expect(wrapper.find("input[name='abvMore']").prop('value')).toBe('30');
  });

  test("should call onPropertyChange prop when inputs with attr name='abvLess' change", () => {
    wrapper
      .find("input[name='abvLess']")
      .simulate('change', { target: { value: '40', name: 'abvLess' } });
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toBe('40');
  });

  test("should call onPropertyChange prop when inputs with attr name='abvMore' change", () => {
    wrapper
      .find("input[name='abvMore']")
      .simulate('change', { target: { value: '10', name: 'abvMore' } });
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toBe('10');
  });
});

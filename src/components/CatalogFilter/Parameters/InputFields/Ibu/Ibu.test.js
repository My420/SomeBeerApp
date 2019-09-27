import React from 'react';
import { shallow } from 'enzyme';
import Ibu from './Ibu';

describe('test <Ibu /> component', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(
    <Ibu lessValue="20" moreValue="30" onPropertyChange={mockFunc} />
  );

  beforeEach(() => {
    mockFunc.mockReset();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render  inputs with attr name='ibuLess' with correct value", () => {
    expect(wrapper.find("input[name='ibuLess']").prop('value')).toBe('20');
  });

  test("should render  inputs with attr name='ibuMore' with correct value", () => {
    expect(wrapper.find("input[name='ibuMore']").prop('value')).toBe('30');
  });

  test("should call onPropertyChange prop when inputs with attr name='ibuLess' change", () => {
    wrapper
      .find("input[name='ibuLess']")
      .simulate('change', { target: { value: '40', name: 'ibuLess' } });
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toBe('40');
  });

  test("should call onPropertyChange prop when inputs with attr name='ibuMore' change", () => {
    wrapper
      .find("input[name='ibuMore']")
      .simulate('change', { target: { value: '10', name: 'ibuMore' } });
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toBe('10');
  });
});

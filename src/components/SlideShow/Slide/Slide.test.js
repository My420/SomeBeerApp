import React from 'react';
import { shallow } from 'enzyme';
import Slide from './Slide';

describe('Test <Slide /> component', () => {
  const wrapper = shallow(
    <Slide component={<span>Test</span>} data-test="test" />
  );

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should  render div with  className 'slide'", () => {
    expect(wrapper.find('div').prop('className')).toBe('slide');
  });

  test('should  render component inside div', () => {
    expect(wrapper.find('div').find('span')).toHaveLength(1);
  });

  test('should transfer attribute', () => {
    expect(wrapper.find('div').prop('data-test')).toBe('test');
  });
});

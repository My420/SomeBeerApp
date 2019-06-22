import React from 'react';
import { shallow } from 'enzyme';
import IconMenuCss from './IconMenuCss';

describe('Test <IconMenuCss/> component', () => {
  const wrapper = shallow(<IconMenuCss />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should  render div with class container', () => {
    expect(wrapper.find('div.container')).toHaveLength(1);
  });

  test('should  render div.menu inside div.container', () => {
    expect(wrapper.find('div.container').find('div.menu')).toHaveLength(1);
  });
});

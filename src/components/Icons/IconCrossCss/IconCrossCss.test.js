import React from 'react';
import { shallow } from 'enzyme';
import IconCrossCss from './IconCrossCss';

describe('Test <IconCrossCss/> component', () => {
  const wrapper = shallow(<IconCrossCss />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should  render div with class container', () => {
    expect(wrapper.find('div.container')).toHaveLength(1);
  });
});

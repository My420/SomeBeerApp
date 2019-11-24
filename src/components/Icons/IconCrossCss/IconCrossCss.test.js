import React from 'react';
import { shallow } from 'enzyme';
import IconCrossCss from './IconCrossCss';

describe('Test <IconCrossCss/> component', () => {
  const wrapper = shallow(<IconCrossCss />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should  render span with class container', () => {
    expect(wrapper.find('span.container')).toHaveLength(1);
  });
});

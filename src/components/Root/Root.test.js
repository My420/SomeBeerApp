import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';

describe('Test <Root/> component', () => {
  const wrapper = shallow(<Root />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

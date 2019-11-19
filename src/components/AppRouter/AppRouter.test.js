import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from './AppRouter';

describe('Test <AppRouter/> component', () => {
  const wrapper = shallow(<AppRouter />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

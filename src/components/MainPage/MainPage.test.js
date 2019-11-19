import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

describe('Test <MainPage /> component', () => {
  const wrapper = shallow(<MainPage />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

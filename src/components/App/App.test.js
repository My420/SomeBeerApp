import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test <App /> component', () => {
  const wrapper = shallow(<App />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from './NotFoundPage';

describe('Test <NotFoundPage /> component', () => {
  const wrapper = shallow(<NotFoundPage />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

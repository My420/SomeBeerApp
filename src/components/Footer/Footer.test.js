import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AUTHOR } from '../../utils/constants';

describe('Test <Footer /> component', () => {
  const wrapper = shallow(<Footer />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should contain <span> with author name', () => {
    const span = wrapper.find('span.author');
    expect(span.text()).toBe(`Developed by ${AUTHOR}.`);
  });
  test('should contain <SocialMedia /> component', () => {
    const span = wrapper.find('SocialMedia');
    expect(span).toHaveLength(1);
  });
});

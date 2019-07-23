import React from 'react';
import { shallow } from 'enzyme';
import SocialMedia from './SocialMedia';
import { SOCIAL_LINK } from '../../utils/constants';

describe('Test <SocialMedia /> component', () => {
  const wrapper = shallow(<SocialMedia />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should contain a link to my githab page', () => {
    const link = wrapper.find(`a[href='${SOCIAL_LINK.GITHUB}']`);
    expect(link).toHaveLength(1);
  });

  test('should contain a link to my email', () => {
    const link = wrapper.find(`a[href='${SOCIAL_LINK.EMAIL}']`);
    expect(link).toHaveLength(1);
  });

  test('should contain a link to my skype', () => {
    const link = wrapper.find(`a[href='${SOCIAL_LINK.SKYPE}']`);
    expect(link).toHaveLength(1);
  });
});

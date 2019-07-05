import React from 'react';
import { shallow } from 'enzyme';
import Picture from './Picture';
import { BROWSER_MIN_WIDTH } from '../../utils/constants';

describe('Test <Picture/> component', () => {
  const wrapper = shallow(
    <Picture
      className="test"
      alt="test"
      pcSrc="pc/test/src"
      tabletSrc="tablet/test/src"
      mobileSrc="mobile/test/src"
    />
  );

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render tag <picture>', () => {
    expect(wrapper.find('picture')).toHaveLength(1);
  });

  test('should render tag <sourse> for mobile device, inside tag <picture>', () => {
    const mobileMedia = `(max-width: ${BROWSER_MIN_WIDTH.TABLET_7}px)`;

    expect(
      wrapper.find('picture').find(`source[media='${mobileMedia}']`)
    ).toHaveLength(1);

    expect(wrapper.find(`source[media='${mobileMedia}']`).prop('srcSet')).toBe(
      'mobile/test/src'
    );
  });

  test('should render tag <sourse> for tablet device, inside tag <picture>', () => {
    const tabletMedia = `(max-width: ${BROWSER_MIN_WIDTH.MPC}px)`;

    expect(
      wrapper.find('picture').find(`source[media='${tabletMedia}']`)
    ).toHaveLength(1);

    expect(wrapper.find(`source[media='${tabletMedia}']`).prop('srcSet')).toBe(
      'tablet/test/src'
    );
  });

  test('should render tag <img> for PC device, inside tag <picture>', () => {
    expect(wrapper.find('picture').find('img')).toHaveLength(1);

    expect(wrapper.find('img').prop('src')).toBe('pc/test/src');
  });

  test('should set className and alt attribute for tag <img>', () => {
    expect(wrapper.find('img').prop('className')).toBe('test');

    expect(wrapper.find('img').prop('alt')).toBe('test');
  });
});

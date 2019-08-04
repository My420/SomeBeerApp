import React from 'react';
import { shallow } from 'enzyme';
import IconFavoriteSvg from './IconFavoriteSvg';

describe('Test <IconFavoriteSvg /> component', () => {
  describe('Test <IconFavoriteSvg /> without props', () => {
    const wrapper = shallow(<IconFavoriteSvg />);

    test('should correct render component without props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render div with default className', () => {
      expect(wrapper.find('div').prop('className')).toBe('container');
    });

    test('should  render svg inside div', () => {
      expect(wrapper.find('div.container').find('svg')).toHaveLength(1);
    });

    test('svg should  have path with default className', () => {
      expect(wrapper.find('path').prop('className')).toBe('path');
    });
  });

  describe('Test <IconFavoriteSvg /> with props', () => {
    const wrapper = shallow(
      <IconFavoriteSvg containerClass="testContainer" pathClass="testPath" />
    );

    test('should correct render component with props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  correct set className at div ', () => {
      expect(wrapper.find('div').prop('className')).toBe('testContainer');
    });

    test('should  correct set className at path', () => {
      expect(wrapper.find('path').prop('className')).toBe('testPath');
    });
  });
});

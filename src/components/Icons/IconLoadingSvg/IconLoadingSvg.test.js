import React from 'react';
import { shallow } from 'enzyme';
import IconLoadingSvg from './IconLoadingSvg';

describe('Test <IconLoadingSvg /> component', () => {
  describe('Test <IconLoadingSvg /> without props', () => {
    const wrapper = shallow(<IconLoadingSvg />);

    test('should correct render component without props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render div with default className', () => {
      expect(wrapper.find('div').prop('className')).toBe('container');
    });

    test('should  render svg inside div', () => {
      expect(wrapper.find('div.container').find('svg')).toHaveLength(1);
    });

    test('should  render svg with default className', () => {
      expect(wrapper.find('svg').prop('className')).toBe('svg');
    });
  });

  describe('Test <IconLoadingSvg /> with props', () => {
    const wrapper = shallow(
      <IconLoadingSvg
        wrapperClass="testContainer"
        svgClass="testPath"
        color="green"
      />
    );

    test('should correct render component with props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  correct set className at div ', () => {
      expect(wrapper.find('div').prop('className')).toBe('testContainer');
    });

    test('should  correct set className at svg', () => {
      expect(wrapper.find('svg').prop('className')).toBe('testPath');
    });
  });
});

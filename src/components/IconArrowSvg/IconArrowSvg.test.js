import React from 'react';
import { shallow } from 'enzyme';
import IconArrowSvg from './IconArrowSvg';

describe('Test <IconArrowSvg /> component', () => {
  describe('Test <IconArrowSvg /> without props', () => {
    const wrapper = shallow(<IconArrowSvg />);

    test('should correct render component without props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render div with default className', () => {
      expect(wrapper.find('div').prop('className')).toBe('container left');
    });

    test("should  render svg'", () => {
      expect(wrapper.find('svg')).toHaveLength(1);
    });

    test('svg should  have path with default className', () => {
      expect(wrapper.find('path').prop('className')).toBe('path');
    });
  });

  describe('Test <IconArrowSvg /> with props', () => {
    const wrapper = shallow(
      <IconArrowSvg
        direction="top"
        containerClass="testContainer"
        pathClass="testPath"
      />
    );

    test('should correct render component with props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  correct set className at div ', () => {
      expect(wrapper.find('div').prop('className')).toBe('testContainer top');
    });

    test('should  correct set className at path', () => {
      expect(wrapper.find('path').prop('className')).toBe('testPath');
    });
  });
});

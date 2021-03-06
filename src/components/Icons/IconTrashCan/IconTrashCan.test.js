import React from 'react';
import { shallow } from 'enzyme';
import IconTrashCan from './IconTrashCan';

describe('Test <IconTrashCan /> component', () => {
  describe('Test <IconTrashCan /> without props', () => {
    const wrapper = shallow(<IconTrashCan />);

    test('should correct render component without props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render span with default className', () => {
      expect(wrapper.find('span').prop('className')).toBe('container');
    });

    test('should  render svg inside span', () => {
      expect(wrapper.find('span.container').find('svg')).toHaveLength(1);
    });

    test('svg should  have path with default className', () => {
      expect(wrapper.find('path').prop('className')).toBe('path');
    });
  });

  describe('Test <IconTrashCan /> with props', () => {
    const wrapper = shallow(
      <IconTrashCan wrapperClass="testContainer" pathClass="testPath" />
    );

    test('should correct render component with props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  correct set className at span ', () => {
      expect(wrapper.find('span').prop('className')).toBe('testContainer');
    });

    test('should  correct set className at path', () => {
      expect(wrapper.find('path').prop('className')).toBe('testPath');
    });
  });
});

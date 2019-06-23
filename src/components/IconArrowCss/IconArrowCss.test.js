import React from 'react';
import { shallow } from 'enzyme';
import IconArrowCss from './IconArrowCss';

describe('Test <IconArrowCss /> component', () => {
  describe('Test <IconArrowCss /> without props', () => {
    const wrapper = shallow(<IconArrowCss />);

    test('should correct render component without props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test("should  render div with className 'container' and 'left'", () => {
      expect(wrapper.find('div.container')).toHaveLength(1);
      expect(wrapper.find('div.left')).toHaveLength(1);
    });

    test("should  render div with className 'arrow' arrowDefault'", () => {
      expect(wrapper.find('div.arrow')).toHaveLength(1);
      expect(wrapper.find('div.arrowDefault')).toHaveLength(1);
    });

    test("should  set size attribute by Default'", () => {
      expect(wrapper.find('div.container').prop('style').width).toBeDefined();
    });

    test("should  set thickness attribute by Default'", () => {
      expect(wrapper.find('div.arrow').prop('style').borderWidth).toBeDefined();
    });
  });

  describe('Test <IconArrowCss /> with props', () => {
    const wrapper = shallow(
      <IconArrowCss className="test" direction="top" size={50} thickness={5} />
    );

    test('should correct render component with props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test("should  correct set className at first div 'container top'", () => {
      expect(wrapper.find('div.container')).toHaveLength(1);
      expect(wrapper.find('div.top')).toHaveLength(1);
    });

    test("should correct set className at second div 'arrow test'", () => {
      expect(wrapper.find('div.arrow')).toHaveLength(1);
      expect(wrapper.find('div.test')).toHaveLength(1);
    });

    test("should correct set size attribute'", () => {
      expect(wrapper.find('div.container').prop('style').width).toBe(50);
    });

    test("should correct set thickness attribute'", () => {
      expect(wrapper.find('div.arrow').prop('style').borderWidth).toBe('5px');
    });
  });
});

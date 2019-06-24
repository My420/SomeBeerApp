import React from 'react';
import { shallow } from 'enzyme';
import SlideShow from './SlideShow';

describe('Test <SlideShow /> component', () => {
  const wrapper = shallow(
    <SlideShow>
      <span className="test1">1</span>
      <span className="test2">2</span>
      <span className="test3">3</span>
    </SlideShow>
  );

  const initialState = {
    index: 0,
    isForward: true
  };

  describe('Test component correct render', () => {
    test('should correct render component', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('initialize <SlideShow> with initial state ', () => {
      expect(wrapper.state()).toEqual(initialState);
    });

    test('should render div with correct className', () => {
      expect(wrapper.find('div.slideBox').prop('className')).toBe(
        'slideBox forward'
      );
    });

    test('should render two Buttons components with proper className inside div.slideBox ', () => {
      expect(
        wrapper
          .find('div.slideBox')
          .find('Button')
          .first()
          .prop('className')
      ).toBe('prev');

      expect(
        wrapper
          .find('div.slideBox')
          .find('Button')
          .last()
          .prop('className')
      ).toBe('next');
    });

    test('each Button component should contain proper Icon component with proper direction', () => {
      expect(
        wrapper
          .find("Button[className='prev']")
          .find('IconArrowSvg')
          .props().direction
      ).toBe('left');

      expect(
        wrapper
          .find("Button[className='next']")
          .find('IconArrowSvg')
          .props().direction
      ).toBe('right');
    });

    test('each Icon component should have correct props', () => {
      const ExpectedProps = {
        pathClass: 'arrow',
        containerClass: 'arrowContainer',
        direction: expect.any(String)
      };
      expect(wrapper.find("IconArrowSvg[direction='left']").props()).toEqual(
        ExpectedProps
      );

      expect(wrapper.find("IconArrowSvg[direction='right']").props()).toEqual(
        ExpectedProps
      );
    });

    test('should render <Slide> component with correct props inside div.slideBox', () => {
      expect(
        wrapper
          .find('div.slideBox')
          .find('Slide')
          .prop('component')
      ).toStrictEqual(<span className="test1">1</span>);
    });
  });

  describe('Test component slide-change logic', () => {
    test('should corect change Next slide', () => {
      wrapper.find("Button[className='next']").simulate('click');
      expect(wrapper.state()).toEqual({ index: 1, isForward: true });
      expect(wrapper.find('Slide').prop('component')).toStrictEqual(
        <span className="test2">2</span>
      );
    });

    test('should corect change Next slide in corner case', () => {
      wrapper
        .find("Button[className='next']")
        .simulate('click')
        .simulate('click');
      expect(wrapper.state()).toEqual({ index: 0, isForward: true });
      expect(wrapper.find('Slide').prop('component')).toStrictEqual(
        <span className="test1">1</span>
      );
    });

    test('should corect change Prev slide in corner case', () => {
      wrapper.find("Button[className='prev']").simulate('click');
      expect(wrapper.state()).toEqual({ index: 2, isForward: false });
      expect(wrapper.find('Slide').prop('component')).toStrictEqual(
        <span className="test3">3</span>
      );
    });
  });
});

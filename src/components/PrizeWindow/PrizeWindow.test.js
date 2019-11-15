import React from 'react';
import { shallow } from 'enzyme';
import PrizeWindow from './PrizeWindow';

describe('Test <PrizeWindow /> component', () => {
  const prize = 'prize';
  const mockFn = jest.fn();

  describe('Test  component when props isOpen = true', () => {
    const wrapper = shallow(
      <PrizeWindow prize={prize} isOpen onButtonClick={mockFn} />
    );

    test('should correct render component', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render GridItemCard component with correct props', () => {
      const component = wrapper.find('GridItemCard');
      expect(component).toHaveLength(1);
      expect(component.prop('data')).toBe(prize);
    });

    test('should  call onButtonClick prop function on close button click', () => {
      wrapper.find('Button.closeButton').simulate('click');
      expect(mockFn.mock.calls.length).toBe(1);
    });
  });

  describe('Test  component when props isOpen = false', () => {
    const wrapper = shallow(
      <PrizeWindow prize={prize} isOpen={false} onButtonClick={mockFn} />
    );

    test('should correct render component', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});

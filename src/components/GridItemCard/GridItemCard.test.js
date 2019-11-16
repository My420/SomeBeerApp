import React from 'react';
import { shallow } from 'enzyme';
import GridItemCard from './GridItemCard';

describe('test <GridItemCard/> component', () => {
  const data = { id: 1 };

  describe('test component with default state', () => {
    const expectedState = {
      isDescriptionOpen: false
    };

    const wrapper = shallow(<GridItemCard data={data} />);

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render component with correct state', () => {
      expect(wrapper.state()).toEqual(expectedState);
    });

    test('should render GridCardLink component with correct prop data', () => {
      const component = wrapper.find('GridCardLink');
      expect(component.prop('data')).toEqual(data);
      expect(component.prop('isDescriptionOpen')).toBe(
        expectedState.isDescriptionOpen
      );
    });

    test('should render GridCardControl component with correct prop data', () => {
      const component = wrapper.find('GridCardControl');
      expect(component.prop('data')).toEqual(data);
      expect(component.prop('isDescriptionOpen')).toBe(
        expectedState.isDescriptionOpen
      );
    });
  });

  describe('test component when state change', () => {
    const newState = {
      isDescriptionOpen: true
    };

    const wrapper = shallow(<GridItemCard data={data} />);

    wrapper.setState({ ...newState });

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render component with correct state', () => {
      expect(wrapper.state()).toEqual(newState);
    });

    test('should render GridCardLink component with correct prop data', () => {
      const component = wrapper.find('GridCardLink');
      expect(component.prop('data')).toEqual(data);
      expect(component.prop('isDescriptionOpen')).toBe(
        newState.isDescriptionOpen
      );
    });

    test('should render GridCardControl component with correct prop data', () => {
      const component = wrapper.find('GridCardControl');
      expect(component.prop('data')).toEqual(data);
      expect(component.prop('isDescriptionOpen')).toBe(
        newState.isDescriptionOpen
      );
    });
  });

  describe('test components methods', () => {
    test('showDescription method should work correct', () => {
      const wrapper = shallow(<GridItemCard data={data} />);
      const instance = wrapper.instance();
      expect(wrapper.state().isDescriptionOpen).toBeFalsy();
      instance.showDescription();
      expect(wrapper.state().isDescriptionOpen).toBeTruthy();
    });

    test('hideDescription method should work correct', () => {
      const wrapper = shallow(<GridItemCard data={data} />);
      wrapper.setState({ isDescriptionOpen: true });
      const instance = wrapper.instance();
      expect(wrapper.state().isDescriptionOpen).toBeTruthy();
      instance.hideDescription();
      expect(wrapper.state().isDescriptionOpen).toBeFalsy();
    });

    test('toggleDescription method should work correct', () => {
      const wrapper = shallow(<GridItemCard data={data} />);
      const instance = wrapper.instance();
      expect(wrapper.state().isDescriptionOpen).toBeFalsy();
      instance.toggleDescription();
      expect(wrapper.state().isDescriptionOpen).toBeTruthy();
      instance.toggleDescription();
      expect(wrapper.state().isDescriptionOpen).toBeFalsy();
    });
  });
});

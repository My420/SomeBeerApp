import React from 'react';
import { shallow } from 'enzyme';
import { PopularBeer } from './PopularBeer';
import GridItemCard from '../GridItemCard/GridItemCard';

describe('Test <PopularBeer /> component', () => {
  const props = {
    isLoading: false,
    isLoaded: false,
    isError: false,
    errorMessage: '',
    data: 'test',
    getBeerData: () => {}
  };

  describe('test getBeerData function call', () => {
    test('call the `getBeerData` function in componentDidMount', () => {
      const testFunc = jest.fn();
      const newProps = { ...props, getBeerData: testFunc };
      shallow(<PopularBeer {...newProps} />);

      expect(testFunc.mock.calls.length).toBe(1);
    });

    test('dont call the `getBeerData` function if isLoaded is true', () => {
      const testFunc = jest.fn();
      const newProps = { ...props, isLoaded: true, getBeerData: testFunc };
      shallow(<PopularBeer {...newProps} />);

      expect(testFunc.mock.calls.length).toBe(0);
    });

    test('call the `getBeerData` function if isLoaded is false', () => {
      const testFunc = jest.fn();
      const newProps = { ...props, isError: true, getBeerData: testFunc };
      shallow(<PopularBeer {...newProps} />);

      expect(testFunc.mock.calls.length).toBe(1);
    });
  });

  describe('test <PopularBeer/> component', () => {
    test('should render <IconLoadingSvg/> if isLoading: true', () => {
      const newProps = { ...props, isLoading: true };
      const wrapper = shallow(<PopularBeer {...newProps} />);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('IconLoadingSvg')).toHaveLength(1);
    });

    test('should render <ErrorMsg/> if isError: true', () => {
      const newProps = { ...props, isError: true, errorMessage: 'test error' };
      const wrapper = shallow(<PopularBeer {...newProps} />);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('ErrorMsg')).toHaveLength(1);
    });

    test('should render <PropductList/> if isLoaded: true', () => {
      const newProps = { ...props, isLoaded: true };
      const wrapper = shallow(<PopularBeer {...newProps} />);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('ProductList')).toHaveLength(1);
    });
    test('should correct render <ProductList /> component', () => {
      const newProps = { ...props, isLoaded: true };
      const wrapper = shallow(<PopularBeer {...newProps} />);

      expect(wrapper.find('ProductList').prop('data')).toBe(props.data);
      expect(wrapper.find('ProductList').prop('ProductCard')).toEqual(
        GridItemCard
      );
    });
  });
});

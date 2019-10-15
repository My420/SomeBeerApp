import React from 'react';
import { shallow } from 'enzyme';
import FavoritePagination from './FavoritePagination';

describe('test <FavoritePagination /> component', () => {
  const mockFn = jest.fn();
  const props = {
    isPrevDisabled: true,
    isNextDisabled: false,
    onUserClick: mockFn
  };

  const wrapper = shallow(<FavoritePagination {...props} />);

  beforeEach(() => {
    mockFn.mockClear();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render prev Button component', () => {
    expect(wrapper.find('Button.prev')).toHaveLength(1);
    expect(wrapper.find('Button.prev').prop('children')).toBe('prev');
  });

  test('should render next Button component', () => {
    expect(wrapper.find('Button.next')).toHaveLength(1);
    expect(wrapper.find('Button.next').prop('children')).toBe('next');
  });

  test('prev Button should have correct disabled attr', () => {
    expect(wrapper.find('Button.prev').prop('disabled')).toBe(
      props.isPrevDisabled
    );
  });

  test('next Button should have correct disabled attr', () => {
    expect(wrapper.find('Button.next').prop('disabled')).toBe(
      props.isNextDisabled
    );
  });

  test('prev Button should have correct data-action attr', () => {
    expect(wrapper.find('Button.prev').prop('data-action')).toBe('prev');
  });

  test('next Button should have correct data-action attr', () => {
    expect(wrapper.find('Button.next').prop('data-action')).toBe('next');
  });

  test('click on next Button should call onUserClick prop', () => {
    wrapper.find('Button.next').simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });

  test('click on prev Button should call onUserClick prop', () => {
    wrapper.find('Button.prev').simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });
});

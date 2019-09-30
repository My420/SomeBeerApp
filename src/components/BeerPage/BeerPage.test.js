import React from 'react';
import { shallow } from 'enzyme';
import { BeerPage } from './BeerPage';

describe('test <BeerPage /> component', () => {
  const mockFunc = jest.fn();
  const props = {
    id: 10,
    history: 'history',
    isLoaded: true,
    isLoading: false,
    isError: false,
    errorMessage: '',
    data: 'test data',
    getBeerData: mockFunc
  };

  const wrapper = shallow(<BeerPage {...props} />);
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('getBeerData prop func should be called in compDidMount with correct arg', () => {
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toBe(props.id);
  });

  test('should render LoadStatusSwitcher component with correct props', () => {
    const { isLoaded, isLoading, isError } = props;
    expect(wrapper.find('LoadStatusSwitcher')).toHaveLength(1);
    expect(wrapper.find('LoadStatusSwitcher').prop('isLoading')).toBe(
      isLoading
    );
    expect(wrapper.find('LoadStatusSwitcher').prop('isLoaded')).toBe(isLoaded);
    expect(wrapper.find('LoadStatusSwitcher').prop('isError')).toBe(isError);
    expect(
      typeof wrapper.find('LoadStatusSwitcher').prop('LoadingComponent')
    ).toBe('function');
    expect(
      typeof wrapper.find('LoadStatusSwitcher').prop('ErrorComponent')
    ).toBe('function');
    expect(
      typeof wrapper.find('LoadStatusSwitcher').prop('DataComponent')
    ).toBe('function');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { RoulettePage } from './RoulettePage';

describe('Test <RoulettePage /> component', () => {
  const props = {
    isLoading: false,
    isLoaded: false,
    isError: false,
    errorMessage: '',
    data: 'test',
    getData: () => {}
  };

  const wrapper = shallow(<RoulettePage {...props} />);
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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

  describe('test getData function call', () => {
    test('call the `getBeerData` function in componentDidMount', () => {
      const testFunc = jest.fn();
      const newProps = { ...props, getData: testFunc };
      shallow(<RoulettePage {...newProps} />);

      expect(testFunc.mock.calls.length).toBe(1);
    });

    test('do not call the `getBeerData` function if isLoaded is true', () => {
      const testFunc = jest.fn();
      const newProps = { ...props, isLoaded: true, getBeerData: testFunc };
      shallow(<RoulettePage {...newProps} />);

      expect(testFunc.mock.calls.length).toBe(0);
    });

    test('call the `getData` function if isLoaded is false', () => {
      const testFunc = jest.fn();
      const newProps = { ...props, isError: true, getData: testFunc };
      shallow(<RoulettePage {...newProps} />);

      expect(testFunc.mock.calls.length).toBe(1);
    });
  });
});

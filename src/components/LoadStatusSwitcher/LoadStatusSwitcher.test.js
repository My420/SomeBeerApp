import React from 'react';
import { shallow } from 'enzyme';
import LoadStatusSwitcher from './LoadStatusSwitcher';

describe('Test <LoadStatusSwitcher /> component', () => {
  const LoadingComponent = () => {
    return <p>Loading</p>;
  };

  const ErrorComponent = () => {
    return <p>Error</p>;
  };

  const DataComponent = () => {
    return <p>Data</p>;
  };

  describe('Test LoadingComponent', () => {
    const props = {
      isLoading: true,
      isError: false,
      isLoaded: false,
      LoadingComponent,
      ErrorComponent,
      DataComponent
    };

    const wrapper = shallow(<LoadStatusSwitcher {...props} />);

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('if isLoading true should render only LoadingComponent (despite other status)', () => {
      wrapper.setProps({ ...props, isError: true, isLoaded: true });
      expect(wrapper.find('LoadingComponent')).toHaveLength(1);
      expect(wrapper.find('ErrorComponent')).toHaveLength(0);
      expect(wrapper.find('DataComponent')).toHaveLength(0);
    });
  });

  describe('Test ErrorComponent', () => {
    const props = {
      isLoading: false,
      isError: true,
      isLoaded: false,
      LoadingComponent,
      ErrorComponent,
      DataComponent
    };

    const wrapper = shallow(<LoadStatusSwitcher {...props} />);

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('if isError = true and isLoading = false should render only ErrorComponent (despite isLoaded = true)', () => {
      wrapper.setProps({ ...props, isLoaded: true });
      expect(wrapper.find('LoadingComponent')).toHaveLength(0);
      expect(wrapper.find('ErrorComponent')).toHaveLength(1);
      expect(wrapper.find('DataComponent')).toHaveLength(0);
    });
  });

  describe('Test DataComponent', () => {
    const props = {
      isLoading: false,
      isError: false,
      isLoaded: true,
      LoadingComponent,
      ErrorComponent,
      DataComponent
    };

    const wrapper = shallow(<LoadStatusSwitcher {...props} />);

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('if isLoaded = true and other status = false should render only DataComponent', () => {
      expect(wrapper.find('LoadingComponent')).toHaveLength(0);
      expect(wrapper.find('ErrorComponent')).toHaveLength(0);
      expect(wrapper.find('DataComponent')).toHaveLength(1);
    });
  });
});

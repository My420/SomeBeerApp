import React from 'react';
import { mount } from 'enzyme';
import withToggle from './ToggleWrapper';

describe('Test withToggle HOC', () => {
  const MyComponent = ({ isOpen, toggleState }) => {
    return (
      <button type="button" onClick={() => toggleState()}>
        {isOpen ? 'Open' : 'Close'}
      </button>
    );
  };

  describe('HOC should correct set isOpen state', () => {
    test('isOpen = false by default', () => {
      const WrappedComponent = withToggle(MyComponent);
      const wrapper = mount(<WrappedComponent />);

      const component = wrapper.find('ToggleWrapper(MyComponent)');
      expect(component.state().isOpen).toBeFalsy();
    });

    test('isOpen = false if second argument = false', () => {
      const WrappedComponent = withToggle(MyComponent, false);
      const wrapper = mount(<WrappedComponent />);

      const component = wrapper.find('ToggleWrapper(MyComponent)');
      expect(component.state().isOpen).toBeFalsy();
    });

    test('isOpen = true if second argument = true', () => {
      const WrappedComponent = withToggle(MyComponent, true);
      const wrapper = mount(<WrappedComponent />);

      const component = wrapper.find('ToggleWrapper(MyComponent)');
      expect(component.state().isOpen).toBeTruthy();
    });
  });

  const WrappedComponent = withToggle(MyComponent);
  const wrapper = mount(<WrappedComponent test="test" />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ToggleWrapper(MyComponent) component', () => {
    const component = wrapper.find('ToggleWrapper(MyComponent)');
    expect(component).toHaveLength(1);
  });

  test('ToggleWrapper(MyComponent) component should have correct state by default', () => {
    const expected = {
      isOpen: false
    };
    const component = wrapper.find('ToggleWrapper(MyComponent)');
    expect(component.state()).toEqual(expected);
  });

  test('should render MyComponent component', () => {
    const component = wrapper.find('MyComponent');
    expect(component).toHaveLength(1);
  });

  test('WrappedComponent should pass props through to MyComponent component', () => {
    const expected = 'test';
    const componentWrapper = wrapper.find('ToggleWrapper(MyComponent)');
    expect(componentWrapper.prop('test')).toBe(expected);
    const componentTest = wrapper.find('MyComponent');
    expect(componentTest.prop('test')).toBe(expected);
  });

  test('MyComponent component should have correct isOpen prop', () => {
    const expected = wrapper.find('ToggleWrapper(MyComponent)').state().isOpen;
    const component = wrapper.find('MyComponent');
    expect(component.prop('isOpen')).toBe(expected);
  });

  test('MyComponent component should have correct toggleState prop', () => {
    const component = wrapper.find('MyComponent');
    expect(typeof component.prop('toggleState')).toBe('function');
  });

  test('toggleState function prop correct change WrappedComponent state', () => {
    const componentWrapper = wrapper.find('ToggleWrapper(MyComponent)');
    const button = wrapper.find('button');

    const isOpenValue = componentWrapper.state().isOpen;
    button.simulate('click');
    const expected = !isOpenValue;

    expect(componentWrapper.state().isOpen).toBe(expected);

    button.simulate('click');
    expect(componentWrapper.state().isOpen).toBe(!expected);
  });
});

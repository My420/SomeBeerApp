import React from 'react';
import { shallow } from 'enzyme';
import { Parameters } from './Parameters';

describe('test <Parameters /> component', () => {
  describe('test <Parameters /> component with close InputFields', () => {
    const propFn = jest.fn();
    const toggleFn = jest.fn();
    const options = {};
    const wrapper = shallow(
      <Parameters
        options={options}
        onPropertyChange={propFn}
        isOpen={false}
        toggleState={toggleFn}
      />
    );

    beforeEach(() => {
      propFn.mockReset();
      toggleFn.mockReset();
    });

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should call toggleState func on button click', () => {
      wrapper.find('Button').simulate('click');
      expect(toggleFn.mock.calls.length).toBe(1);
    });
  });

  describe('test <Parameters /> component with open InputFields', () => {
    const propFn = jest.fn();
    const toggleFn = jest.fn();
    const options = {};
    const wrapper = shallow(
      <Parameters
        options={options}
        onPropertyChange={propFn}
        isOpen
        toggleState={toggleFn}
      />
    );

    beforeEach(() => {
      propFn.mockReset();
      toggleFn.mockReset();
    });

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should call toggleState func on button click', () => {
      wrapper.find('Button').simulate('click');
      expect(toggleFn.mock.calls.length).toBe(1);
    });
  });
});

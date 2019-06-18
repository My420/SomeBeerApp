import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('test <Button /> component', () => {
  describe('test <Button /> component with no transferred props', () => {
    const wrapper = shallow(<Button />);

    test('should render default button', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test("should contain text 'button' by default", () => {
      expect(
        wrapper
          .find('button')
          .text()
          .trim()
      ).toBe('button');
    });

    test("should have class 'defaultButton'", () => {
      expect(wrapper.find('button').hasClass('defaultButton')).toBeTruthy();
    });

    test("attribute disabled should be equal 'false'", () => {
      expect(wrapper.find('button').prop('disabled')).toBeFalsy();
    });
  });

  describe('test <Button /> component with common props', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(
      <Button className="test" onClick={mockFunc}>
        test button
      </Button>
    );

    test('should render button with common attr', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should correct display button text', () => {
      expect(
        wrapper
          .find('button')
          .text()
          .trim()
      ).toBe('test button');
    });

    test('should have correct class attr', () => {
      expect(wrapper.find('button').hasClass('test')).toBeTruthy();
    });

    test('should call correct onClick function ', () => {
      wrapper.find('button').simulate('click');
      expect(mockFunc.mock.calls.length).toBe(1);
    });
  });

  describe('test <Button /> component with uncommon props', () => {
    const wrapper = shallow(
      <Button className="test" disabled activeStyle="active" type="submit" />
    );

    test('should render button  with uncommon attr', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should add activeClass props in class', () => {
      expect(wrapper.find('button').hasClass('test active')).toBeTruthy();
    });

    test("attribute disabled should be equal 'true'", () => {
      expect(wrapper.find('button').prop('disabled')).toBeTruthy();
    });

    test("button should have type 'submit'", () => {
      expect(wrapper.find('button').prop('type')).toBe('submit');
    });
  });
});

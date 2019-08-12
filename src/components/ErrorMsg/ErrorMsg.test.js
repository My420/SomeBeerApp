import React from 'react';
import { shallow } from 'enzyme';
import ErrorMsg from './ErrorMsg';
import { ERROR_TITLE, ERROR_ACTION } from '../../utils/constants';

describe('Test <ErrorMsg /> component', () => {
  describe('Test <ErrorMsg /> without props', () => {
    const wrapper = shallow(<ErrorMsg />);

    test('should correct render component without props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render <p> with default className', () => {
      expect(wrapper.find('p').prop('className')).toBe('error');
    });

    test('should  render 3 <span> inside div', () => {
      expect(wrapper.find('p.error').find('span')).toHaveLength(3);
    });

    test("<span> with className 'title' should contain specific text", () => {
      expect(wrapper.find('span.title').text()).toBe(ERROR_TITLE);
    });

    test("<span> with className 'action' should contain specific text", () => {
      expect(wrapper.find('span.action').text()).toBe(ERROR_ACTION);
    });

    test("<span> with className 'msg' should contain text by default", () => {
      expect(wrapper.find('span.msg').text()).toBe('');
    });
  });

  describe('Test <ErrorMsg /> with props', () => {
    const testMsg = 'Test error msg';

    const wrapper = shallow(<ErrorMsg errorMsg={testMsg} />);

    test('should correct render component with props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render <p> with default className', () => {
      expect(wrapper.find('p').prop('className')).toBe('error');
    });

    test('should  render 3 <span> inside div', () => {
      expect(wrapper.find('p.error').find('span')).toHaveLength(3);
    });

    test("<span> with className 'title' should contain specific text", () => {
      expect(wrapper.find('span.title').text()).toBe(ERROR_TITLE);
    });

    test("<span> with className 'action' should contain specific text", () => {
      expect(wrapper.find('span.action').text()).toBe(ERROR_ACTION);
    });

    test("<span> with className 'msg' should contain text = textMsg", () => {
      expect(wrapper.find('span.msg').text()).toBe(testMsg);
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import ListGroup from './ListGroup';

describe('Test <ListGroup /> component', () => {
  describe('Test <ListGroup /> without props', () => {
    const wrapper = shallow(<ListGroup />);

    test('should correct render component without props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render tag <ul> by default', () => {
      expect(wrapper.find('ul')).toHaveLength(1);
    });
  });

  describe('Test <ListGroup /> with props', () => {
    const wrapper = shallow(
      <ListGroup className="test" tag="ol" data-test="test">
        <li>test</li>
        <li>test</li>
      </ListGroup>
    );

    test('should correct render component with props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should set correct tag with correct className', () => {
      expect(wrapper.find('ol').filter('.test')).toHaveLength(1);
    });

    test('should transfer attribute', () => {
      expect(wrapper.find('ol').prop('data-test')).toBe('test');
    });

    test('should render children', () => {
      expect(wrapper.find('li')).toHaveLength(2);
    });
  });
});

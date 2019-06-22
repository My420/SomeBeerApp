import React from 'react';
import { shallow } from 'enzyme';
import ListGroupItem from './ListGroupItem';

describe('Test <ListGroupItem /> component', () => {
  describe('Test <ListGroupItem /> without props', () => {
    const wrapper = shallow(<ListGroupItem />);

    test('should correct render component without props', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Test <ListGroupItem /> with props', () => {
    const wrapper = shallow(
      <ListGroupItem className="test">
        <span>Test</span>
      </ListGroupItem>
    );

    test('should correct render component with props', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render tag <li>', () => {
      expect(wrapper.find('li')).toHaveLength(1);
    });

    test('should  render props children', () => {
      expect(wrapper.find('span')).toHaveLength(1);
    });

    test('should  set calssName correct', () => {
      expect(wrapper.find('.test')).toHaveLength(1);
    });
  });
});

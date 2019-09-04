import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

describe('Test <Navigation /> component', () => {
  const testLinks = [['/', 'Main'], ['/test', 'Test']];

  const wrapper = shallow(<Navigation links={testLinks} />);

  test('should correct render <Navigation /> component ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render  tag <nav>  with className = navigation', () => {
    expect(wrapper.find('nav.navigation')).toHaveLength(1);
  });

  test('should render <ListGroup/> component  with className = list, inside tag <nav>', () => {
    expect(wrapper.find('nav.navigation').find('ListGroup')).toHaveLength(1);
    expect(wrapper.find('ListGroup').prop('className')).toBe('list');
  });

  test('should render 2 <ListGroupItem/> component  with className = item, inside tag <ListGroup/>', () => {
    expect(wrapper.find('ListGroup').find('ListGroupItem')).toHaveLength(2);
    expect(
      wrapper
        .find('ListGroupItem')
        .first()
        .prop('className')
    ).toBe('item');
    expect(
      wrapper
        .find('ListGroupItem')
        .last()
        .prop('className')
    ).toBe('item');
  });

  test('should render 2 <ListGroupItem/> component  with correct key props', () => {
    expect(
      wrapper
        .find('ListGroupItem')
        .first()
        .key()
    ).toBe(testLinks[0][0]);
    expect(
      wrapper
        .find('ListGroupItem')
        .last()
        .key()
    ).toBe(testLinks[1][0]);
  });

  test('should render corect <NavLink/> component, inside tag <ListGroupItem/>', () => {
    expect(
      wrapper
        .find('ListGroupItem')
        .first()
        .find('NavLink')
        .prop('to')
    ).toBe(testLinks[0][0]);

    expect(
      wrapper
        .find('ListGroupItem')
        .first()
        .find('NavLink')
        .prop('children')
    ).toBe(testLinks[0][1]);

    expect(
      wrapper
        .find('ListGroupItem')
        .last()
        .find('NavLink')
        .prop('to')
    ).toBe(testLinks[1][0]);

    expect(
      wrapper
        .find('ListGroupItem')
        .last()
        .find('NavLink')
        .prop('children')
    ).toBe(testLinks[1][1]);
  });

  test('should render <NavLink/> with className = link ', () => {
    expect(
      wrapper
        .find('NavLink')
        .first()
        .prop('className')
    ).toBe('link');

    expect(
      wrapper
        .find('NavLink')
        .last()
        .prop('className')
    ).toBe('link');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';
import ProductList from './ProductList';
import GridItemCard from '../GridItemCard/GridItemCard';

describe('Test <ProductList /> component', () => {
  const testData = List([
    {
      id: '1'
    },
    {
      id: '2'
    }
  ]);
  const wrapper = shallow(
    <ProductList data={testData} ProductCard={GridItemCard} />
  );

  test('should correct render <ProductList /> component ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render <ListGroup/> component with className = list', () => {
    expect(wrapper.find('ListGroup').prop('className')).toBe('list');
  });

  test('should render 2 <ListGroupItem/> component inside <ListGroup/> component', () => {
    expect(wrapper.find('ListGroup').find('ListGroupItem')).toHaveLength(2);
  });

  test('<ListGroupItem/> should have className = item', () => {
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

  test('<ListGroupItem/> should have prop key = id', () => {
    expect(
      wrapper
        .find('ListGroupItem')
        .first()
        .key()
    ).toBe(testData.get(0).id);
    expect(
      wrapper
        .find('ListGroupItem')
        .last()
        .key()
    ).toBe(testData.get(1).id);
  });

  test('should render 2 <GridItemCard/> component inside <ListGroupItem/> component', () => {
    expect(
      wrapper
        .find('ListGroupItem')
        .first()
        .find('GridItemCard')
    ).toHaveLength(1);
    expect(
      wrapper
        .find('ListGroupItem')
        .last()
        .find('GridItemCard')
    ).toHaveLength(1);
  });

  test('<GridItemCard/> should have correct prop data', () => {
    expect(
      wrapper
        .find('GridItemCard')
        .first()
        .prop('data')
    ).toEqual(testData.get(0));
    expect(
      wrapper
        .find('GridItemCard')
        .last()
        .prop('data')
    ).toEqual(testData.get(1));
  });
});

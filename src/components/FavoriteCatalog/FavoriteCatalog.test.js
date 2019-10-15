import React from 'react';
import { is } from 'immutable';
import { shallow } from 'enzyme';
import { FavoriteCatalog } from './FavoriteCatalog';
import convertFavoriteToImmutable from '../../utils/convertFavoriteToImmutable';
import { CATALOG_BEER_AMOUNT } from '../../utils/constants';

describe('test <FavoriteCatalog /> component', () => {
  const data = {};
  for (let i = 0; i < 52; i += 1) {
    data[i] = { id: i };
  }

  const favorite = convertFavoriteToImmutable(data);

  describe('Should correct render 1st page ', () => {
    const wrapper = shallow(<FavoriteCatalog favorite={favorite} />);
    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render ProductList component', () => {
      expect(wrapper.find('ProductList')).toHaveLength(1);
    });

    test('ProductList should have correct prop ProductCard', () => {
      expect(wrapper.find('ProductList').prop('ProductCard').name).toBe(
        'GridItemCard'
      );
    });

    test('ProductList should have correct initial state', () => {
      expect(wrapper.state('page')).toBe(0);
    });

    test(`ProductList prop data shuold have size = ${CATALOG_BEER_AMOUNT}`, () => {
      expect(wrapper.find('ProductList').prop('data').size).toBe(
        CATALOG_BEER_AMOUNT
      );
    });

    test(`ProductList prop data shuold be equal  0-${CATALOG_BEER_AMOUNT} elements of favorite prop`, () => {
      const propData = wrapper.find('ProductList').prop('data');

      const expected = favorite.toList().slice(0, 24);

      expect(is(propData, expected)).toBeTruthy();
    });

    test('should render FavoritePagination component', () => {
      expect(wrapper.find('FavoritePagination')).toHaveLength(1);
    });

    test('FavoritePagination should heve correct props', () => {
      expect(
        wrapper.find('FavoritePagination').prop('isPrevDisabled')
      ).toBeTruthy();
      expect(
        wrapper.find('FavoritePagination').prop('isNextDisabled')
      ).toBeFalsy();

      expect(
        typeof wrapper.find('FavoritePagination').prop('onUserClick')
      ).toBe('function');
    });
  });

  describe('Should correct render 2nd page ', () => {
    const wrapper = shallow(<FavoriteCatalog favorite={favorite} />);
    wrapper.setState({ page: 1 });
    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render ProductList component', () => {
      expect(wrapper.find('ProductList')).toHaveLength(1);
    });

    test('ProductList should have correct prop ProductCard', () => {
      expect(wrapper.find('ProductList').prop('ProductCard').name).toBe(
        'GridItemCard'
      );
    });

    test('ProductList should have correct state', () => {
      expect(wrapper.state('page')).toBe(1);
    });

    test(`ProductList prop data shuold have size = ${CATALOG_BEER_AMOUNT}`, () => {
      expect(wrapper.find('ProductList').prop('data').size).toBe(
        CATALOG_BEER_AMOUNT
      );
    });

    test(`ProductList prop data shuold be equal  ${CATALOG_BEER_AMOUNT}-${CATALOG_BEER_AMOUNT *
      2} elements of favorite prop`, () => {
      const propData = wrapper.find('ProductList').prop('data');

      const expected = favorite.toList().slice(24, 48);

      expect(is(propData, expected)).toBeTruthy();
    });

    test('should render FavoritePagination component', () => {
      expect(wrapper.find('FavoritePagination')).toHaveLength(1);
    });

    test('FavoritePagination should heve correct props', () => {
      expect(
        wrapper.find('FavoritePagination').prop('isPrevDisabled')
      ).toBeFalsy();
      expect(
        wrapper.find('FavoritePagination').prop('isNextDisabled')
      ).toBeFalsy();

      expect(
        typeof wrapper.find('FavoritePagination').prop('onUserClick')
      ).toBe('function');
    });
  });

  describe('Should correct render 3rd page ', () => {
    const wrapper = shallow(<FavoriteCatalog favorite={favorite} />);
    wrapper.setState({ page: 2 });
    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render ProductList component', () => {
      expect(wrapper.find('ProductList')).toHaveLength(1);
    });

    test('ProductList should have correct prop ProductCard', () => {
      expect(wrapper.find('ProductList').prop('ProductCard').name).toBe(
        'GridItemCard'
      );
    });

    test('ProductList should have correct state', () => {
      expect(wrapper.state('page')).toBe(2);
    });

    test(`ProductList prop data shuold have size = 3`, () => {
      expect(wrapper.find('ProductList').prop('data').size).toBe(4);
    });

    test(`ProductList prop data shuold be equal  last 3 elements of favorite prop`, () => {
      const propData = wrapper.find('ProductList').prop('data');

      const expected = favorite.toList().slice(48, 72);

      expect(is(propData, expected)).toBeTruthy();
    });

    test('should render FavoritePagination component', () => {
      expect(wrapper.find('FavoritePagination')).toHaveLength(1);
    });

    test('FavoritePagination should heve correct props', () => {
      expect(
        wrapper.find('FavoritePagination').prop('isPrevDisabled')
      ).toBeFalsy();
      expect(
        wrapper.find('FavoritePagination').prop('isNextDisabled')
      ).toBeTruthy();

      expect(
        typeof wrapper.find('FavoritePagination').prop('onUserClick')
      ).toBe('function');
    });
  });

  describe(`Should not  render FavoritPagination component if prop favorite.size < ${CATALOG_BEER_AMOUNT} `, () => {
    const wrapper = shallow(
      <FavoriteCatalog
        favorite={convertFavoriteToImmutable({ 1: { id: 1 } })}
      />
    );

    test('should not render FavoritePagination component', () => {
      expect(wrapper.find('FavoritePagination')).toHaveLength(0);
    });
  });
});

import React from 'react';
import { Map } from 'immutable';
import { shallow } from 'enzyme';
import { FavoriteButton } from './FavoriteButton';

describe('test <FavoriteButton /> component', () => {
  const favoriteData = Map({ '23': { id: 23 } });
  const addMock = jest.fn();
  const delMock = jest.fn();

  describe('test component when item is in the cart', () => {
    const itemData = { id: '23' };

    const wrapper = shallow(
      <FavoriteButton
        itemData={itemData}
        favoriteData={favoriteData}
        addItemToFavorite={addMock}
        deleteItemFromFavorite={delMock}
      />
    );

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render IconFavoriteFillSvg component', () => {
      expect(wrapper.find('IconFavoriteFillSvg')).toHaveLength(1);
    });

    test('should call deleteItemFromFavorite prop func when user click on the button', () => {
      wrapper.find('Button').simulate('click');
      expect(delMock.mock.calls.length).toBe(1);
      expect(delMock.mock.calls[0][0]).toBe(itemData.id);
    });
  });

  describe('test component when item is not in the cart', () => {
    const itemData = { id: '33' };

    const wrapper = shallow(
      <FavoriteButton
        itemData={itemData}
        favoriteData={favoriteData}
        addItemToFavorite={addMock}
        deleteItemFromFavorite={delMock}
      />
    );

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render IconFavoriteSvg component', () => {
      expect(wrapper.find('IconFavoriteSvg')).toHaveLength(1);
    });

    test('should call addItemToFavorite prop func when user click on the button', () => {
      wrapper.find('Button').simulate('click');
      expect(addMock.mock.calls.length).toBe(1);
      expect(addMock.mock.calls[0][0]).toEqual(itemData);
    });
  });
});

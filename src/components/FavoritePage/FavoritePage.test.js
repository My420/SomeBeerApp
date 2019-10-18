import React from 'react';
import { shallow } from 'enzyme';
import FavoritePage from './FavoritePage';

describe('test <FavoritePage /> component', () => {
  const wrapper = shallow(<FavoritePage />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should  render Connect(FavoriteWrapper(FavoriteCatalog)) component ', () => {
    expect(
      wrapper.find('Connect(FavoriteWrapper(FavoriteCatalog))')
    ).toHaveLength(1);
  });
});

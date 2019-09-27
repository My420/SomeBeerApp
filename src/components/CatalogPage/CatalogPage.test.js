import React from 'react';
import { shallow } from 'enzyme';
import CatalogPage from './CatalogPage';
import {
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP,
  PAGE,
  BEER_NAME_PROP
} from '../../utils/constants';

describe('test <CatalogPage /> component', () => {
  const defaultOptions = {
    [ABV_LESS_PROP]: '0',
    [ABV_MORE_PROP]: '0',
    [IBU_LESS_PROP]: '0',
    [IBU_MORE_PROP]: '0',
    [EBC_LESS_PROP]: '0',
    [EBC_MORE_PROP]: '0',
    [PAGE]: '1',
    [BEER_NAME_PROP]: ''
  };

  const history = {
    path: 'test'
  };
  const wrapper = shallow(<CatalogPage history={history} location={{}} />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should  render Connect(Catalog) component ', () => {
    expect(wrapper.find('Connect(Catalog)')).toHaveLength(1);
  });

  test('Connect(Catalog) should have prop options =  defaultOptions ', () => {
    expect(wrapper.find('Connect(Catalog)').prop('options')).toEqual(
      defaultOptions
    );
  });

  test('Connect(Catalog) should have history = history ', () => {
    expect(wrapper.find('Connect(Catalog)').prop('history')).toEqual(history);
  });
});

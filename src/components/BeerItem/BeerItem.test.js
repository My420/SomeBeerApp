import React from 'react';
import { shallow } from 'enzyme';
import BeerItem from './BeerItem';
import BeerDataRecord from '../../utils/BeerDataRecord';

describe('test <BeerItem /> component', () => {
  const data = BeerDataRecord({
    name: 'Test Beer',
    image_url: 'test_url',
    tagline: 'test_tegline',
    description: 'test_description',
    brewers_tips: 'test_brewers_tips',
    food_pairing: 'test_food_pairing',
    abv: '10',
    ebc: '20',
    ibu: '30'
  });

  const wrapper = shallow(<BeerItem data={data} />);

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render tag <img>  with correct src', () => {
    const component = wrapper.find('img.image');
    expect(component).toHaveLength(1);
    expect(component.prop('src')).toBe(data.image_url);
  });

  test('should render BeerItemParameters component with correct props', () => {
    const component = wrapper.find('BeerItemParameters');
    const expectedParam = {
      abv: data.abv,
      ebc: data.ebc,
      ibu: data.ibu
    };
    expect(component).toHaveLength(1);
    expect(component.prop('parameter')).toEqual(expectedParam);
    expect(component.prop('title')).toBe(data.tagline);
  });

  test('should render BeerItemDescription component with correct props', () => {
    const component = wrapper.find('BeerItemDescription');
    const expectedParam = {
      Description: data.description,
      Food: data.food_pairing,
      Tips: data.brewers_tips
    };
    expect(component).toHaveLength(1);
    expect(component.prop('description')).toEqual(expectedParam);
  });

  test('should render FavoriteButton component with correct props', () => {
    const component = wrapper.find('Connect(FavoriteWrapper(FavoriteButton))');
    const expectedParam = data.toJS();
    expect(component).toHaveLength(1);
    expect(component.prop('itemData')).toEqual(expectedParam);
  });

  test('should render CartButton component with correct props', () => {
    const component = wrapper.find('Connect(CartWrapper(CartButton))');
    const expectedParam = data.toJS();
    expect(component).toHaveLength(1);
    expect(component.prop('itemData')).toEqual(expectedParam);
  });
});

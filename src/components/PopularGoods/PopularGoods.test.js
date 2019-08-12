import React from 'react';
import { shallow } from 'enzyme';
import PopularGoods from './PopularGoods';

describe('Test <PopularGoods /> component', () => {
  const wrapper = shallow(<PopularGoods />);

  test('should correct render <PopularGoods /> component ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render <section> tag with className = popular', () => {
    expect(wrapper.find('section').prop('className')).toBe('popular');
  });

  test('should render <h2> tag with className = title inside <section/>', () => {
    expect(
      wrapper
        .find('section')
        .find('h2')
        .prop('className')
    ).toBe('title');
  });

  test('should render <PopularBeerList/> component inside <section/>', () => {
    expect(wrapper.find('section').find('Connect(PopularBeer)')).toHaveLength(
      1
    );
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import BeerItemParameters from './BeerItemParameters';

describe('test <BeerItemParameters /> component', () => {
  const title = 'test title';
  const parameters = {
    abv: 90,
    ebc: 60,
    ibu: 40
  };

  const wrapper = shallow(
    <BeerItemParameters parameter={parameters} title={title} />
  );

  test('should render default button', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

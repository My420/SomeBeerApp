import React from 'react';
import { shallow } from 'enzyme';
import GridCardDescription from './GridCardDescription';

describe('test <GridCardDescription/> component', () => {
  const parameter = {
    abv: 11,
    ibu: 22,
    ebc: 33
  };

  const wrapper = shallow(
    <GridCardDescription parameter={parameter} title="test title" />
  );

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

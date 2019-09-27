import React from 'react';
import { shallow } from 'enzyme';
import InputFields from './InputFields';
import {
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP
} from '../../../../utils/constants';

describe('test <InputFields /> component', () => {
  const options = {
    [ABV_LESS_PROP]: '10',
    [ABV_MORE_PROP]: '20',
    [IBU_LESS_PROP]: '30',
    [IBU_MORE_PROP]: '40',
    [EBC_LESS_PROP]: '50',
    [EBC_MORE_PROP]: '60'
  };

  const wrapper = shallow(
    <InputFields options={options} onPropertyChange={() => {}} />
  );

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

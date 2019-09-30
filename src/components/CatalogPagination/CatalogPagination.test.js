import React from 'react';
import { shallow } from 'enzyme';
import CatalogPagination from './CatalogPagination';
import createOptions from '../../utils/createOptions';
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

describe('test <CatalogPagination /> component', () => {
  const options = {
    [ABV_LESS_PROP]: '1',
    [ABV_MORE_PROP]: '2',
    [IBU_LESS_PROP]: '3',
    [IBU_MORE_PROP]: '4',
    [EBC_LESS_PROP]: '5',
    [EBC_MORE_PROP]: '6',
    [PAGE]: '1',
    [BEER_NAME_PROP]: 'test'
  };

  const wrapper = shallow(<CatalogPagination options={options} />);
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render <p> tag as prev button if prev page < 1', () => {
    expect(wrapper.find('p.prevDisabled')).toHaveLength(1);
    expect(wrapper.find('p.prevDisabled').text()).toBe('prev');
  });

  test('should render  prev button if prev page > 0', () => {
    wrapper.setProps({ options: { ...options, [PAGE]: 3 } });
    expect(wrapper.find('p.prevDisabled')).toHaveLength(0);
    expect(wrapper.find('Link.prev')).toHaveLength(1);
    expect(wrapper.find('Link.prev').prop('children')).toBe('prev');
  });

  test('should render  next button', () => {
    expect(wrapper.find('Link.next')).toHaveLength(1);
    expect(wrapper.find('Link.next').prop('children')).toBe('next');
  });

  test("buttons should have correct prop 'to'", () => {
    const newOptions = { ...options, [PAGE]: '77' };
    wrapper.setProps({ options: newOptions });
    const prev = createOptions({ ...newOptions, [PAGE]: '76' });
    const next = createOptions({ ...newOptions, [PAGE]: '78' });
    expect(wrapper.find('Link.next').prop('to')).toBe(next);
    expect(wrapper.find('Link.prev').prop('to')).toBe(prev);
  });
});

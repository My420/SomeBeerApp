import React from 'react';
import { shallow } from 'enzyme';
import RouletteItem from './RouletteItem';
import { DEFAULT_BEER_IMAGE } from '../../utils/constants';

describe('Test <RouletteItem /> component', () => {
  const url = 'test url';
  const id = 20;
  const name = 'test name';

  const wrapper = shallow(<RouletteItem url={url} name={name} id={id} />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should  render tag <img> with correct attr', () => {
    const tag = wrapper.find('img');
    expect(tag).toHaveLength(1);
    expect(tag.prop('src')).toBe(url);
    expect(tag.prop('alt')).toBe(name);
    expect(tag.prop('id')).toBe(id);
  });

  test('should  replace attr src to default if prop url=null ', () => {
    wrapper.setProps({ url: null });
    const tag = wrapper.find('img');
    expect(tag.prop('src')).toBe(DEFAULT_BEER_IMAGE);
  });
});

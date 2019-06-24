import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Test <Main /> component', () => {
  const wrapper = shallow(
    <Main data-test="test">
      <p>test</p>
    </Main>
  );

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should  render children node', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });

  test('should  have className = pageMain', () => {
    expect(wrapper.find('main.pageMain')).toHaveLength(1);
  });

  test('should transfer attribute', () => {
    expect(wrapper.find('main').prop('data-test')).toBe('test');
  });
});

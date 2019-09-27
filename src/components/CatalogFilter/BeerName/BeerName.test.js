import React from 'react';
import { shallow } from 'enzyme';
import BeerName from './BeerName';
import { BEER_NAME_PROP } from '../../../utils/constants';

describe('test <BeerName /> component', () => {
  const mockFunc = jest.fn();
  const wrapper = shallow(
    <BeerName value="test" onPropertyChange={mockFunc} />
  );

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render input with correct value', () => {
    expect(wrapper.find('input').prop('value')).toBe('test');
  });

  test('should call onPropertyChange prop when input change ', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Test' } });
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toBe('Test');
    expect(mockFunc.mock.calls[0][1]).toBe(BEER_NAME_PROP);
  });
});

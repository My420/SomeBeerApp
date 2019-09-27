import React from 'react';
import { shallow, mount } from 'enzyme';
import CatalogFilter from './CatalogFilter';
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
import createOptions from '../../utils/createOptions';

describe('test <CatalogFilter /> component', () => {
  const value = {
    [BEER_NAME_PROP]: 'test'
  };

  const pushMock = jest.fn();
  const defMock = jest.fn();

  const history = {
    push: pushMock
  };

  const wrapper = shallow(<CatalogFilter value={value} history={history} />);

  beforeEach(() => {
    pushMock.mockClear();
    defMock.mockClear();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('initialState = props.value', () => {
    expect(wrapper.state()).toEqual(value);
  });

  test('should render Options component with correct props', () => {
    expect(wrapper.find('ToggleWrapper(Parameters)').prop('options')).toEqual(
      value
    );
    expect(
      typeof wrapper.find('ToggleWrapper(Parameters)').prop('onPropertyChange')
    ).toBe('function');
  });

  test('should render BeerName component with correct props', () => {
    expect(wrapper.find('BeerName').prop('value')).toBe(value[BEER_NAME_PROP]);
    expect(typeof wrapper.find('BeerName').prop('onPropertyChange')).toBe(
      'function'
    );
  });

  test('should render Button component with type submit', () => {
    expect(wrapper.find('Button').prop('type')).toBe('submit');
  });

  test('submit event should  call evt.preventDefault', () => {
    wrapper.find('form').simulate('submit', { preventDefault: defMock });
    expect(defMock.mock.calls.length).toBe(1);
  });

  test('submit event should  not call history.push prop if state not changed', () => {
    wrapper.find('form').simulate('submit', { preventDefault: defMock });
    expect(pushMock.mock.calls.length).toBe(0);
  });

  test('submit event should  call history.push prop if state  changed', () => {
    const newState = { [BEER_NAME_PROP]: 'new test' };
    wrapper.setState(newState);
    wrapper.find('form').simulate('submit', { preventDefault: defMock });
    expect(pushMock.mock.calls.length).toBe(1);
  });

  test('history.push shuold call with correct argument if state  changed', () => {
    const newState = { [BEER_NAME_PROP]: 'new test test' };
    const arg = createOptions({ ...newState, [PAGE]: '1' });
    wrapper.setState(newState);
    wrapper.find('form').simulate('submit', { preventDefault: defMock });
    expect(pushMock.mock.calls[0][0]).toBe(arg);
  });
});

describe('test state cahnging <CatalogFilter /> component', () => {
  const value = {
    [ABV_LESS_PROP]: '0',
    [ABV_MORE_PROP]: '0',
    [IBU_LESS_PROP]: '0',
    [IBU_MORE_PROP]: '0',
    [EBC_LESS_PROP]: '0',
    [EBC_MORE_PROP]: '0',
    [PAGE]: '1',
    [BEER_NAME_PROP]: ''
  };

  const pushMock = jest.fn();

  const history = {
    push: pushMock
  };

  const component = mount(<CatalogFilter value={value} history={history} />);

  beforeEach(() => {
    component.setState({ ...value });
    component.find('Button.button').simulate('click');
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  test(`shuld correct change state if input.nameInput change`, () => {
    component
      .find('input.nameInput')
      .simulate('change', { target: { value: 'Test' } });
    const expectedState = { ...value, [BEER_NAME_PROP]: 'Test' };
    expect(component.state()).toEqual(expectedState);
  });

  test(`shuld correct change state if ABV less input change`, () => {
    component
      .find("input[name='abvLess']")
      .simulate('change', { target: { value: '60', name: 'abvLess' } });
    const expectedState = { ...value, [ABV_LESS_PROP]: '60' };
    expect(component.state()).toEqual(expectedState);
  });

  test(`shuld correct change state if ABV more input change`, () => {
    component
      .find("input[name='abvMore']")
      .simulate('change', { target: { value: '70', name: 'abvMore' } });
    const expectedState = { ...value, [ABV_MORE_PROP]: '70' };
    expect(component.state()).toEqual(expectedState);
  });

  test(`shuld correct change state if EBC less input change`, () => {
    component
      .find("input[name='ebcLess']")
      .simulate('change', { target: { value: '10', name: 'ebcLess' } });
    const expectedState = { ...value, [EBC_LESS_PROP]: '10' };
    expect(component.state()).toEqual(expectedState);
  });

  test(`shuld correct change state if EBC more input change`, () => {
    component
      .find("input[name='ebcMore']")
      .simulate('change', { target: { value: '72', name: 'ebcMore' } });
    const expectedState = { ...value, [EBC_MORE_PROP]: '72' };
    expect(component.state()).toEqual(expectedState);
  });

  test(`shuld correct change state if IBU less input change`, () => {
    component
      .find("input[name='ibuLess']")
      .simulate('change', { target: { value: '23', name: 'ibuLess' } });
    const expectedState = { ...value, [IBU_LESS_PROP]: '23' };
    expect(component.state()).toEqual(expectedState);
  });

  test(`shuld correct change state if IBU more input change`, () => {
    component
      .find("input[name='ibuMore']")
      .simulate('change', { target: { value: '12', name: 'ibuMore' } });
    const expectedState = { ...value, [IBU_MORE_PROP]: '12' };
    expect(component.state()).toEqual(expectedState);
  });
});

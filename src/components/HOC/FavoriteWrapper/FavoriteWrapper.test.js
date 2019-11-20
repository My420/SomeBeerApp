import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { mount } from 'enzyme';
import withFavorite from './FavoriteWrapper';
import favorite, { favoriteInitialState } from '../../../reducer/favorite';

describe('Test withFavorite HOC', () => {
  const TestComp = () => {
    return <p>My Component</p>;
  };

  const ComponentWrapper = withFavorite(TestComp);
  const store = createStore(combineReducers({ favorite }), {});

  const wrapper = mount(
    <Provider store={store}>
      <ComponentWrapper test="test" anotherOne="anotherOne" />
    </Provider>
  );

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correct name for ComponentWrapper component', () => {
    const component = wrapper.find('FavoriteWrapper(TestComp)');
    expect(component).toHaveLength(1);
  });

  test('should render TestComp inside ComponentWrapper component', () => {
    const component = wrapper
      .find('FavoriteWrapper(TestComp)')
      .find('TestComp');
    expect(component).toHaveLength(1);
  });

  test('ComponentWrapper should pass props through to TestComp component', () => {
    const component = wrapper.find('TestComp');
    expect(component.prop('test')).toBe('test');
    expect(component.prop('anotherOne')).toBe('anotherOne');
  });

  test('TestComp component should have correct favoriteData prop', () => {
    const component = wrapper.find('TestComp');
    expect(component.prop('favoriteData')).toEqual(favoriteInitialState);
  });

  test('addItemToFavorite prop in TestComp component should be function', () => {
    const component = wrapper.find('TestComp');
    expect(typeof component.prop('addItemToFavorite')).toBe('function');
  });

  test('deleteItemFromFavorite prop in TestComp component should be function', () => {
    const component = wrapper.find('TestComp');
    expect(typeof component.prop('deleteItemFromFavorite')).toBe('function');
  });
});

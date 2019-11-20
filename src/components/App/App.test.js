import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test <App /> component', () => {
  const wrapper = shallow(<App />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ResizeWrapper(HeaderCreator) component', () => {
    const component = wrapper.find('ResizeWrapper(HeaderCreator)');
    expect(component).toHaveLength(1);
  });

  test('should render Footer component', () => {
    const component = wrapper.find('Footer');
    expect(component).toHaveLength(1);
  });

  test('should render Switch component', () => {
    const component = wrapper.find('Switch');
    expect(component).toHaveLength(1);
  });

  test('should render 8 Route components inside Switch component', () => {
    const components = wrapper.find('Switch').find('Route');
    expect(components).toHaveLength(8);
  });

  test('should correct render Route component for MainPage', () => {
    const component = wrapper.find("Route[path='/']");
    expect(component).toHaveLength(1);
    expect(component.prop('component').name).toBe('MainPage');
    expect(component.prop('exact')).toBeTruthy();
  });

  test('should correct render Route component for CatalogPage', () => {
    const component = wrapper.find("Route[path='/catalog']");
    expect(component).toHaveLength(1);
    expect(component.prop('component').name).toBe('CatalogPage');
    expect(component.prop('exact')).toBeTruthy();
  });

  test('should correct render Route component for FavoritePage', () => {
    const component = wrapper.find("Route[path='/favorite']");
    expect(component).toHaveLength(1);
    expect(component.prop('component').name).toBe('FavoritePage');
    expect(component.prop('exact')).toBeTruthy();
  });

  test('should correct render Route component for CartPage', () => {
    const component = wrapper.find("Route[path='/cart']");
    expect(component).toHaveLength(1);
    expect(component.prop('component').name).toBe('CartPage');
    expect(component.prop('exact')).toBeTruthy();
  });

  test('should correct render Route component for ItemPage', () => {
    const component = wrapper.find("Route[path='/id/:id']");
    expect(component).toHaveLength(1);
    expect(component.prop('component').name).toBe('ItemPage');
    expect(component.prop('exact')).toBeTruthy();
  });

  test('should correct render Route component for Roulette', () => {
    const component = wrapper.find("Route[path='/roulette']");
    expect(component).toHaveLength(1);
    expect(component.prop('component').displayName).toBe(
      'Connect(ResizeWrapper(RoulettePage))'
    );
    expect(component.prop('exact')).toBeTruthy();
  });

  test('should correct render Route component for AboutPage', () => {
    const component = wrapper.find("Route[path='/about']");
    expect(component).toHaveLength(1);
    expect(component.prop('component').name).toBe('AboutPage');
    expect(component.prop('exact')).toBeTruthy();
  });

  test('should correct render Route component for NotFoundPage', () => {
    const component = wrapper.find('Route').last();
    expect(component.prop('component').name).toBe('NotFoundPage');
    expect(component.prop('exact')).toBeUndefined();
    expect(component.prop('path')).toBeUndefined();
  });
});

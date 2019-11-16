import React from 'react';
import { shallow } from 'enzyme';
import GridCardControl from './GridCardControl';

describe('test <GridCardControl /> component', () => {
  const data = { id: 'test' };
  const isDescriptionOpen = false;
  const mockFn = jest.fn();

  const wrapper = shallow(
    <GridCardControl
      data={data}
      isDescriptionOpen={isDescriptionOpen}
      onToggleButtonClick={mockFn}
    />
  );

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render FavoriteButton component with correct data prop', () => {
    const component = wrapper.find('Connect(FavoriteWrapper(FavoriteButton))');
    expect(component).toHaveLength(1);
    expect(component.prop('itemData')).toEqual(data);
  });

  test('should render CartButton component with correct data prop', () => {
    const component = wrapper.find('Connect(CartWrapper(CartButton))');
    expect(component).toHaveLength(1);
    expect(component.prop('itemData')).toEqual(data);
  });

  test("should render IconInfoSvg component with className = 'infoPathClose' when prop isDescriptionOpen = false", () => {
    const component = wrapper.find('IconInfoSvg');
    expect(component).toHaveLength(1);
    expect(component.prop('pathClass')).toBe('infoPathClose');
  });

  test("should render IconInfoSvg component with className = 'infoPathOpen' when prop isDescriptionOpen = true", () => {
    wrapper.setProps({ isDescriptionOpen: true });
    const component = wrapper.find('IconInfoSvg');
    expect(component).toHaveLength(1);
    expect(component.prop('pathClass')).toBe('infoPathOpen');
  });

  test('should call prop onToggleButtonClick on Button component click', () => {
    const component = wrapper.find('Button');
    expect(component).toHaveLength(1);
    component.simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });
});

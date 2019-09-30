import React from 'react';
import { shallow } from 'enzyme';
import ItemPage from './ItemPage';

describe('test <ItemPage /> component', () => {
  const match = {
    params: { id: 22 }
  };

  const wrapper = shallow(<ItemPage match={match} />);
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render CatalogBeerPage component with correct props', () => {
    const component = wrapper.find('Connect(BeerPage)');
    expect(component).toHaveLength(1);
    expect(component.prop('id')).toBe(match.params.id);
  });
});

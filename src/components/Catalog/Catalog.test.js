import React from 'react';
import { shallow } from 'enzyme';
import { Catalog } from './Catalog';

describe('test <Catalog /> component', () => {
  const options = { name: 'test' };
  const history = { path: 'test' };
  const other = {
    isLoading: true,
    isLoaded: false,
    isError: false,
    errorMessage: '',
    data: { test: 'test' }
  };

  const mockFunc = jest.fn();

  const wrapper = shallow(
    <Catalog
      options={options}
      history={history}
      {...other}
      getCatalogData={mockFunc}
    />
  );

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render CatalogFilter component with correct props', () => {
    expect(wrapper.find('CatalogFilter')).toHaveLength(1);
    expect(wrapper.find('CatalogFilter').prop('history')).toEqual(history);
    expect(wrapper.find('CatalogFilter').prop('value')).toEqual(options);
  });

  test('should render LoadStatusSwitcher component with correct props', () => {
    const { isLoaded, isLoading, isError } = other;
    expect(wrapper.find('LoadStatusSwitcher')).toHaveLength(1);
    expect(wrapper.find('LoadStatusSwitcher').prop('isLoading')).toBe(
      isLoading
    );
    expect(wrapper.find('LoadStatusSwitcher').prop('isLoaded')).toBe(isLoaded);
    expect(wrapper.find('LoadStatusSwitcher').prop('isError')).toBe(isError);
    expect(
      typeof wrapper.find('LoadStatusSwitcher').prop('LoadingComponent')
    ).toBe('function');
    expect(
      typeof wrapper.find('LoadStatusSwitcher').prop('ErrorComponent')
    ).toBe('function');
    expect(
      typeof wrapper.find('LoadStatusSwitcher').prop('DataComponent')
    ).toBe('function');
  });

  test('should call getCatalogData function in componentDidMount', () => {
    expect(mockFunc.mock.calls.length).toBe(1);
    expect(mockFunc.mock.calls[0][0]).toEqual(options);
  });

  test('should not call getCatalogData in compDidUpdate if prop options is same', () => {
    wrapper.setProps({ options });
    expect(mockFunc.mock.calls.length).toBe(1);
  });

  test('should  call getCatalogData in compDidUpdate if prop option is not same', () => {
    wrapper.setProps({ options: { name: 'test2' } });
    expect(mockFunc.mock.calls.length).toBe(2);
    expect(mockFunc.mock.calls[1][0]).toEqual({ name: 'test2' });
  });

  test('should  not render CatalogPagination component if prop data.size = 0', () => {
    wrapper.setProps({ data: { size: 0 } });
    expect(wrapper.find('CatalogPagination')).toHaveLength(0);
  });

  test('should  render CatalogPagination component if prop data.size != 0', () => {
    wrapper.setProps({ data: { size: 33 }, options: { name: 'test2' } });
    expect(wrapper.find('CatalogPagination')).toHaveLength(1);
  });
});

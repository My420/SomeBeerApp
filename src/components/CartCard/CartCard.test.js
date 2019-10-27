import React from 'react';
import { shallow } from 'enzyme';
import CartCard from './CartCard';

describe('test <CartCard /> component', () => {
  const changeMock = jest.fn();
  const delMock = jest.fn();

  const data = {
    amount: 1,
    item: { id: 1, image_url: 'test_url', name: 'test name' }
  };

  const wrapper = shallow(
    <CartCard data={data} changeAmount={changeMock} deleteCard={delMock} />
  );

  beforeEach(() => {
    changeMock.mockReset();
    delMock.mockReset();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render image with correct url', () => {
    const image = wrapper.find('img');
    expect(image).toHaveLength(1);
    expect(image.prop('src')).toBe(data.item.image_url);
  });

  test('should render correct Link', () => {
    const link = wrapper.find('Link');
    const expectedPropTo = `id/${data.item.id}`;
    expect(link).toHaveLength(1);
    expect(link.prop('to')).toBe(expectedPropTo);
    expect(link.prop('children')).toBe(data.item.name);
  });

  test('should render span with correct className and item amount', () => {
    const span = wrapper.find('span.amount');
    expect(span).toHaveLength(1);
    expect(span.text()).toBe(`${data.amount}`);
  });

  test('should render decrease button', () => {
    const button = wrapper.find('Button.decrease');
    expect(button).toHaveLength(1);
  });

  test('click on decrease button should call deleteCard prop with correct arg, if amount === 1', () => {
    const evt = { currentTarget: { dataset: { action: 'decrease' } } };
    const button = wrapper.find('Button.decrease');
    button.simulate('click', evt);
    expect(delMock.mock.calls.length).toBe(1);
    expect(delMock.mock.calls[0][0]).toBe(data.item.id);
  });

  test('click on decrease button should call changeAmount prop with correct arg, if amount > 1', () => {
    const evt = { currentTarget: { dataset: { action: 'decrease' } } };
    const newAmount = 2;
    wrapper.setProps({
      data: { ...data, amount: newAmount }
    });
    const button = wrapper.find('Button.decrease');
    button.simulate('click', evt);
    expect(changeMock.mock.calls.length).toBe(1);
    expect(changeMock.mock.calls[0][0]).toBe(data.item.id);
    expect(changeMock.mock.calls[0][1]).toBe(newAmount - 1);
  });

  test('should render increase button', () => {
    const button = wrapper.find('Button.increase');
    expect(button).toHaveLength(1);
  });

  test('click on increase button should call changeAmount prop with correct arguments', () => {
    const evt = { currentTarget: { dataset: { action: 'increase' } } };
    const newAmount = 2;
    wrapper.setProps({
      data: { ...data, amount: newAmount }
    });
    const button = wrapper.find('Button.increase');
    button.simulate('click', evt);
    expect(changeMock.mock.calls.length).toBe(1);
    expect(changeMock.mock.calls[0][0]).toBe(data.item.id);
    expect(changeMock.mock.calls[0][1]).toBe(newAmount + 1);
  });

  test('should render delete button', () => {
    const button = wrapper.find('Button.delete');
    expect(button).toHaveLength(1);
  });

  test('click on delete button should call deleteCard prop with correct arguments', () => {
    const evt = { currentTarget: { dataset: { action: 'delete' } } };
    const button = wrapper.find('Button.delete');
    button.simulate('click', evt);
    expect(delMock.mock.calls.length).toBe(1);
    expect(delMock.mock.calls[0][0]).toBe(data.item.id);
  });
});

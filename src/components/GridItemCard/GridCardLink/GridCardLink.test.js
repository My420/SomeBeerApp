import React from 'react';
import { shallow } from 'enzyme';
import GridCardLink from './GridCardLink';

describe('test <GridCardLink/> component', () => {
  const data = {
    abv: 11,
    ibu: 22,
    ebc: 33,
    id: 11,
    tagline: 'test tagline',
    image_url: 'test url',
    name: 'test name'
  };

  const enterMock = jest.fn();
  const leaveMock = jest.fn();

  describe('test component when prop isDescriptionOpen = false', () => {
    const wrapper = shallow(
      <GridCardLink
        data={data}
        isDescriptionOpen={false}
        onCursorEnter={enterMock}
        onCursorLeave={leaveMock}
      />
    );

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test("should render Link component with correct prop 'to'", () => {
      const component = wrapper.find('Link');
      expect(component).toHaveLength(1);
      expect(component.prop('to')).toBe(`id/${data.id}`);
    });

    test('should render tag <img/> with correct attr', () => {
      const component = wrapper.find('img');
      expect(component).toHaveLength(1);
      expect(component.prop('alt')).toBe(data.name);
      expect(component.prop('src')).toBe(data.image_url);
    });

    test('should render tag <span/> with correct text', () => {
      const component = wrapper.find('span');
      expect(component).toHaveLength(1);
      expect(component.text()).toBe(data.name);
    });
  });

  describe('test component when prop isDescriptionOpen = true', () => {
    const wrapper = shallow(
      <GridCardLink
        data={data}
        isDescriptionOpen
        onCursorEnter={enterMock}
        onCursorLeave={leaveMock}
      />
    );

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test("should render Link component with correct prop 'to'", () => {
      const component = wrapper.find('Link');
      expect(component).toHaveLength(1);
      expect(component.prop('to')).toBe(`id/${data.id}`);
    });

    test('should render tag <img/> with correct attr', () => {
      const component = wrapper.find('img');
      expect(component).toHaveLength(1);
      expect(component.prop('alt')).toBe(data.name);
      expect(component.prop('src')).toBe(data.image_url);
    });

    test('should render tag <span/> with correct text', () => {
      const component = wrapper.find('span');
      expect(component).toHaveLength(1);
      expect(component.text()).toBe(data.name);
    });

    test('should render GridCardDescription component with correct props', () => {
      const { abv, ebc, ibu, tagline } = data;
      const expectedParam = {
        abv,
        ebc,
        ibu
      };
      const component = wrapper.find('GridCardDescription');
      expect(component).toHaveLength(1);
      expect(component.prop('parameter')).toEqual(expectedParam);
      expect(component.prop('title')).toBe(tagline);
    });
  });

  describe('test component mouseEnter and mouseLeave event', () => {
    const wrapper = shallow(
      <GridCardLink
        data={data}
        isDescriptionOpen={false}
        onCursorEnter={enterMock}
        onCursorLeave={leaveMock}
      />
    );

    test('should call onCursorEnter prop when mouse above component', () => {
      const component = wrapper.find('Link');
      component.simulate('mouseEnter');
      expect(enterMock.mock.calls.length).toBe(1);
    });

    test('should call onCursorLeave prop when mouse leave component', () => {
      const component = wrapper.find('Link');
      component.simulate('mouseLeave');
      expect(leaveMock.mock.calls.length).toBe(1);
    });
  });
});

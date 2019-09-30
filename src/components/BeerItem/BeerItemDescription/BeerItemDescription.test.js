import React from 'react';
import { shallow } from 'enzyme';
import * as fc from 'fast-check';
import BeerItemDescription from './BeerItemDescription';
import { ENTER_CHAR_CODE } from '../../../utils/constants';

describe('test <BeerItemDescription /> component', () => {
  const description = {
    Description: 'Description',
    Food: ['food1', 'food2'],
    Tips: 'Tips'
  };

  describe('tabs should change on tab click or Enter press', () => {
    const wrapper = shallow(<BeerItemDescription description={description} />);
    const keys = Object.keys(description);

    test("should correct change state on tab click'", () => {
      fc.assert(
        fc.property(fc.integer(0, keys.length - 1), i => {
          const key = keys[i];
          const tab = wrapper.find(`ListGroupItem[data-tab='${key}']`);
          const event = { target: { dataset: { tab: key } } };
          tab.simulate('click', event);
          expect(wrapper.state('current')).toBe(key);
        })
      );
    });

    test("should correct change state on press key Enter on tab'", () => {
      fc.assert(
        fc.property(fc.integer(0, keys.length - 1), i => {
          const key = keys[i];
          const tab = wrapper.find(`ListGroupItem[data-tab='${key}']`);
          const event = {
            target: { dataset: { tab: key } },
            charCode: ENTER_CHAR_CODE
          };
          tab.simulate('keyPress', event);
          expect(wrapper.state('current')).toBe(key);
        })
      );
    });
  });

  describe('test <BeerItemDescription /> shuld render Description tab first', () => {
    const wrapper = shallow(<BeerItemDescription description={description} />);

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test("should have state.current === 'Description' by default", () => {
      expect(wrapper.state('current')).toBe('Description');
    });

    test('should correct render tabs', () => {
      const keys = Object.keys(description);
      const tabs = wrapper.find('ListGroupItem.tabItem');
      expect(tabs).toHaveLength(keys.length);
      for (let i = 0; i < keys.length; i += 1) {
        expect(tabs.at(i).prop('children')).toBe(keys[i]);
      }
    });

    test("should correct render tab 'Description' description", () => {
      expect(wrapper.find('p.description')).toHaveLength(1);
      expect(wrapper.find('p.description').text()).toBe(
        description.Description
      );
    });
  });

  describe("test <BeerItemDescription /> shuld render 'Tips' tab", () => {
    const wrapper = shallow(<BeerItemDescription description={description} />);
    wrapper.setState({ current: 'Tips' });

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test("should have state.current === 'Tips'", () => {
      expect(wrapper.state('current')).toBe('Tips');
    });

    test('should correct render tabs', () => {
      const keys = Object.keys(description);
      const tabs = wrapper.find('ListGroupItem.tabItem');
      expect(tabs).toHaveLength(keys.length);
      for (let i = 0; i < keys.length; i += 1) {
        expect(tabs.at(i).prop('children')).toBe(keys[i]);
      }
    });

    test("should correct render tab 'Tips' description", () => {
      expect(wrapper.find('p.description')).toHaveLength(1);
      expect(wrapper.find('p.description').text()).toBe(description.Tips);
    });
  });

  describe("test <BeerItemDescription /> shuld render 'Food' tab", () => {
    const wrapper = shallow(<BeerItemDescription description={description} />);
    wrapper.setState({ current: 'Food' });

    test('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test("should have state.current === 'Food'", () => {
      expect(wrapper.state('current')).toBe('Food');
    });

    test('should correct render tabs', () => {
      const keys = Object.keys(description);
      const tabs = wrapper.find('ListGroupItem.tabItem');
      expect(tabs).toHaveLength(keys.length);
      for (let i = 0; i < keys.length; i += 1) {
        expect(tabs.at(i).prop('children')).toBe(keys[i]);
      }
    });

    test("should correct render tab 'Food' description", () => {
      const { Food } = description;
      const elems = wrapper.find('ListGroupItem.foodItem');
      expect(elems).toHaveLength(Food.length);
      for (let i = 0; i < Food.length; i += 1) {
        expect(elems.at(i).prop('children')).toBe(Food[i]);
      }
    });
  });
});

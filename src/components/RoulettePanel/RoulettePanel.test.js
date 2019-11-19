import React from 'react';
import { shallow } from 'enzyme';
import RoulettePanel from './RoulettePanel';
import { ROULETTE_CELLS_AMOUNT } from '../../utils/constants';
import convertApiDataToImmutable from '../../utils/convertApiDataToImmutable';

describe('Test <RoulettePanel/> component', () => {
  const arr = [];
  for (let i = 0; i < ROULETTE_CELLS_AMOUNT; i += 1) {
    const elem = {
      image_url: `url-${i + 1}`,
      name: `name-${i + 1}`,
      id: i + 1
    };

    arr.push(elem);
  }

  const data = convertApiDataToImmutable(arr);

  const changeMock = jest.fn();

  const wrapper = shallow(
    <RoulettePanel data={data} changeData={changeMock} />
  );

  const initialState = {
    firstRowX: 0,
    secondRowX: 0,
    winner: null
  };

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have correct initial state', () => {
    expect(wrapper.state()).toEqual(initialState);
  });

  describe('components methods should work correct ', () => {
    const newWrapper = shallow(
      <RoulettePanel data={data} changeData={changeMock} />
    );
    test('should have onNewWinner method', () => {
      expect(typeof newWrapper.instance().onNewWinner).toBe('function');
    });

    test('should have deleteWinner method', () => {
      expect(typeof newWrapper.instance().deleteWinner).toBe('function');
    });

    test('onNewWinner method should work correct', () => {
      const newState = {
        firstRowX: 300,
        secondRowX: 200,
        winner: 3
      };

      const { winner, firstRowX, secondRowX } = newState;

      newWrapper.instance().onNewWinner(winner, firstRowX, secondRowX);
      newWrapper.instance().forceUpdate();
      expect(newWrapper.state()).toEqual(newState);
    });

    test('deleteWinner method should work correct', () => {
      const newState = {
        firstRowX: 300,
        secondRowX: 200,
        winner: 3
      };

      newWrapper.setState(newState);
      expect(newWrapper.state().winner).toBe(newState.winner);
      newWrapper.instance().deleteWinner();
      newWrapper.instance().forceUpdate();
      expect(newWrapper.state().winner).toBe(null);
    });
  });

  describe('should correct render Roulette component', () => {
    test('should render component', () => {
      const component = wrapper.find('Roulette');
      expect(component).toHaveLength(1);
    });

    test("should have correct prop 'components'", () => {
      const component = wrapper.find('Roulette');
      const prop = component.prop('components');
      expect(prop).toHaveLength(ROULETTE_CELLS_AMOUNT);
      prop.forEach((elem, i) => {
        expect(elem.type.name).toBe('RouletteItem');
        expect(elem.props.name).toBe(data.get(i).name);
        expect(elem.props.id).toBe(data.get(i).id);
        expect(elem.props.url).toBe(data.get(i).image_url);
      });
    });

    test("should have correct prop 'firstRowX'", () => {
      const component = wrapper.find('Roulette');
      expect(component.prop('firstRowX')).toBe(wrapper.state().firstRowX);
    });

    test("should have correct prop 'secondRowX'", () => {
      const component = wrapper.find('Roulette');
      expect(component.prop('secondRowX')).toBe(wrapper.state().secondRowX);
    });

    test("should have correct prop 'changeData'", () => {
      const component = wrapper.find('Roulette');
      expect(component.prop('changeData')).toEqual(changeMock);
    });

    test("should have prop 'onNewWinner' = RoulettePanel.onNewWinner", () => {
      const newWrapper = shallow(
        <RoulettePanel data={data} changeData={changeMock} />
      );
      newWrapper.instance().onNewWinner = 'expected';
      newWrapper.instance().forceUpdate();
      const component = newWrapper.find('Roulette');
      expect(component.prop('onNewWinner')).toBe('expected');
    });
  });

  describe('should correct render PrizeWindow component', () => {
    test('should render component', () => {
      const component = wrapper.find('PrizeWindow');
      expect(component).toHaveLength(1);
    });

    test("should have correct prop 'prize'", () => {
      const component = wrapper.find('PrizeWindow');
      expect(component.prop('prize')).toBe(wrapper.state().winner);
    });

    test("should have correct prop 'isOpen'", () => {
      const component = wrapper.find('PrizeWindow');
      expect(component.prop('isOpen')).toBe(!!wrapper.state().winner);
    });

    test("should have prop 'onButtonClick' = RoulettePanel.deleteWinner", () => {
      const newWrapper = shallow(
        <RoulettePanel data={data} changeData={changeMock} />
      );
      newWrapper.instance().deleteWinner = 'expected';
      newWrapper.instance().forceUpdate();
      const component = newWrapper.find('PrizeWindow');
      expect(component.prop('onButtonClick')).toBe('expected');
    });
  });
});

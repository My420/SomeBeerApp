import React from 'react';
import { shallow } from 'enzyme';
import Roulette from './Roulette';
import { ROULETTE_CELLS_AMOUNT } from '../../utils/constants';

describe('Test <Roulette/> component', () => {
  const TestComp = id => {
    return <p>{id}</p>;
  };

  const components = [];
  for (let i = 0; i < ROULETTE_CELLS_AMOUNT; i += 1) {
    components.push(<TestComp id={i + 1} />);
  }

  const firstRowX = 20;
  const secondRowX = 400;
  const changeMock = jest.fn();
  const winnerMock = jest.fn();

  const wrapper = shallow(
    <Roulette
      components={components}
      firstRowX={firstRowX}
      secondRowX={secondRowX}
      changeData={changeMock}
      onNewWinner={winnerMock}
    />
  );

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ListGroup component', () => {
    const component = wrapper.find('ListGroup');
    expect(component).toHaveLength(1);
  });

  test('should render tag <div/> with className = pointer inside ListGroup component', () => {
    const component = wrapper.find('ListGroup').find('div.pointer');
    expect(component).toHaveLength(1);
  });

  test('should render tag <div/> with className = firstRow inside ListGroup component', () => {
    const component = wrapper.find('ListGroup').find('div.firstRow');
    expect(component).toHaveLength(1);
  });

  test('should render tag <div/> with className = secondRow inside ListGroup component', () => {
    const component = wrapper.find('ListGroup').find('div.secondRow');
    expect(component).toHaveLength(1);
  });

  test('tag <div/> with className = firstRow should have correct style attr', () => {
    const component = wrapper.find('ListGroup').find('div.firstRow');
    expect(component.prop('style').transform).toBe(
      `translateX(${firstRowX}px)`
    );
  });

  test('tag <div/> with className = secondRow should have correct style attr', () => {
    const component = wrapper.find('ListGroup').find('div.secondRow');
    expect(component.prop('style').transform).toBe(
      `translateX(${secondRowX}px)`
    );
  });

  test(`should render ${ROULETTE_CELLS_AMOUNT /
    2} ListGroupItem component inside tag <div/> with className = secondRow`, () => {
    const component = wrapper.find('div.secondRow').find('ListGroupItem');
    expect(component).toHaveLength(6);
  });

  test(`should render ${ROULETTE_CELLS_AMOUNT /
    2} ListGroupItem component inside tag <div/> with className = firstRow`, () => {
    const component = wrapper.find('div.firstRow').find('ListGroupItem');
    expect(component).toHaveLength(6);
  });

  test('inside ListGroupItem component should be correct TestComp component', () => {
    const component = wrapper.find('ListGroupItem');
    component.forEach((elem, i) => {
      const expectedComp = elem.find('TestComp');
      expect(expectedComp).toHaveLength(1);
      expect(expectedComp.prop('id')).toBe(i + 1);
    });
  });

  test('should correct render change button', () => {
    const component = wrapper.find('button.changeButton');
    expect(component).toHaveLength(1);
    expect(component.text()).toBe('Change');
  });

  test("click on change button should call 'changeData' prop func", () => {
    const component = wrapper.find('button.changeButton');
    component.simulate('click');
    expect(changeMock).toHaveBeenCalledTimes(1);
  });

  test('should correct render spin button', () => {
    const component = wrapper.find('button.startButton');
    expect(component).toHaveLength(1);
    expect(component.text()).toBe('Spin');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Test <Container /> component', () => {
  const wrapper = shallow(
    <Container>
      <p>test</p>
    </Container>
  );

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render tag <div> with class 'container'", () => {
    expect(wrapper.find('div.container')).toHaveLength(1);
  });

  test("should render tag <p> inside <div> with class 'container'", () => {
    expect(wrapper.find('div.container').find('p')).toHaveLength(1);
    expect(
      wrapper
        .find('div.container')
        .find('p')
        .text()
    ).toBe('test');
  });
});

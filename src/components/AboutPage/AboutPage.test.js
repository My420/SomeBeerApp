import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';
import { PROJECT_GITHUB } from '../../utils/constants';

describe('Test <AboutPage /> component', () => {
  const wrapper = shallow(<AboutPage />);

  test('should correct render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should render correct link on project github page ', () => {
    const elem = wrapper.find(`a[href='${PROJECT_GITHUB}']`);
    expect(elem).toHaveLength(1);
    expect(elem.text()).toBe('GitHub');
  });
  test('should render correct link on API website ', () => {
    const elem = wrapper.find(`a[href='https://punkapi.com/']`);
    expect(elem).toHaveLength(1);
    expect(elem.text()).toBe('Punk API');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { NAVIGATION_LINKS } from '../../utils/constants';

describe('Test <Header /> component', () => {
  const props = {
    isOpen: true,
    isButtonShown: false,
    toggleState: () => {}
  };

  describe('should correct render component with PC props', () => {
    const wrapper = shallow(<Header {...props} />);

    test('should correct render <Header /> component ', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render <header> tag with classNAme = header', () => {
      expect(wrapper.find('header.header')).toHaveLength(1);
    });

    test('should  render <Container> component with classNAme = inner', () => {
      expect(wrapper.find('Container.inner')).toHaveLength(1);
    });

    test('should  render <Navigation /> component ', () => {
      expect(wrapper.find('Navigation')).toHaveLength(1);
    });

    test('<Navigation /> component should have correct props links', () => {
      expect(wrapper.find('Navigation').prop('links')).toEqual(
        NAVIGATION_LINKS
      );
    });

    test('should not  render <Button/> component with className = button', () => {
      expect(wrapper.find('Button.button')).toHaveLength(0);
    });
  });

  describe('should correct render component with Tablet props (nav close)', () => {
    const newProps = { ...props, isOpen: false, isButtonShown: true };
    const wrapper = shallow(<Header {...newProps} />);

    test('should correct render <Header /> component ', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render <header> tag with classNAme = header', () => {
      expect(wrapper.find('header.header')).toHaveLength(1);
    });

    test('should  render <Container> component with classNAme = inner', () => {
      expect(wrapper.find('Container.inner')).toHaveLength(1);
    });

    test('should not  render <Navigation /> component ', () => {
      expect(wrapper.find('Navigation')).toHaveLength(0);
    });

    test('should render <Button/> component with className = button ', () => {
      expect(wrapper.find('Button.button')).toHaveLength(1);
    });

    test('shuold render IconMenuCss inside <Button/> component ', () => {
      expect(wrapper.find('Button').find('IconMenuCss')).toHaveLength(1);
    });
  });

  describe('should correct render component with Tablet props (nav open)', () => {
    const newProps = { ...props, isOpen: true, isButtonShown: true };
    const wrapper = shallow(<Header {...newProps} />);

    test('should correct render <Header /> component ', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should  render <header> tag with classNAme = header', () => {
      expect(wrapper.find('header.header')).toHaveLength(1);
    });

    test('should  render <Container> component with classNAme = inner', () => {
      expect(wrapper.find('Container.inner')).toHaveLength(1);
    });

    test('should render <Navigation /> component ', () => {
      expect(wrapper.find('Navigation')).toHaveLength(1);
    });

    test('<Navigation /> component should have correct props links', () => {
      expect(wrapper.find('Navigation').prop('links')).toEqual(
        NAVIGATION_LINKS
      );
    });

    test('should render <Button/> component with className = button ', () => {
      expect(wrapper.find('Button.button')).toHaveLength(1);
    });

    test('shuold render IconCrossCss inside <Button/> component ', () => {
      expect(wrapper.find('Button').find('IconCrossCss')).toHaveLength(1);
    });
  });

  describe('click on <Button/> component  should call toggleState function ', () => {
    test('should correct work when menu open', () => {
      const toggleFunc = jest.fn();
      const newProps = {
        ...props,
        isOpen: true,
        isButtonShown: true,
        toggleState: toggleFunc
      };
      const wrapper = shallow(<Header {...newProps} />);

      wrapper.find('Button').simulate('click');
      expect(toggleFunc.mock.calls.length).toBe(1);
    });

    test('should correct work when menu close', () => {
      const toggleFunc = jest.fn();
      const newProps = {
        ...props,
        isOpen: false,
        isButtonShown: true,
        toggleState: toggleFunc
      };
      const wrapper = shallow(<Header {...newProps} />);

      wrapper.find('Button').simulate('click');
      expect(toggleFunc.mock.calls.length).toBe(1);
    });
  });
});

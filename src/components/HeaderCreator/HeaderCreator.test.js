import React from 'react';
import { shallow } from 'enzyme';
import { HeaderCreator } from './HeaderCreator';
import { BROWSER_WIDTH_RATIO } from '../../utils/constants';

describe('Test <HeaderCreator /> component', () => {
  describe('prop browserWidthRatio = BROWSER_WIDTH_RATIO.LPC', () => {
    const wrapper = shallow(
      <HeaderCreator browserWidthRatio={BROWSER_WIDTH_RATIO.LPC} />
    );

    test('should correct render <HeaderCreator /> component ', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render <ToggleWrapper(Header)/>', () => {
      expect(wrapper.find('ToggleWrapper(Header)')).toHaveLength(1);
    });

    test(' <ToggleWrapper(Header)/> should have props isButtonShown = false', () => {
      expect(
        wrapper.find('ToggleWrapper(Header)').prop('isButtonShown')
      ).toBeFalsy();
    });
  });

  describe('prop browserWidthRatio = BROWSER_WIDTH_RATIO.MPC', () => {
    const wrapper = shallow(
      <HeaderCreator browserWidthRatio={BROWSER_WIDTH_RATIO.MPC} />
    );

    test('should correct render <HeaderCreator /> component ', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render <ToggleWrapper(Header)/>', () => {
      expect(wrapper.find('ToggleWrapper(Header)')).toHaveLength(1);
    });

    test(' <ToggleWrapper(Header)/> should have props isButtonShown = false', () => {
      expect(
        wrapper.find('ToggleWrapper(Header)').prop('isButtonShown')
      ).toBeFalsy();
    });
  });

  describe('prop browserWidthRatio = BROWSER_WIDTH_RATIO.TABLET_9', () => {
    const wrapper = shallow(
      <HeaderCreator browserWidthRatio={BROWSER_WIDTH_RATIO.TABLET_9} />
    );

    test('should correct render <HeaderCreator /> component ', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render <ToggleWrapper(Header)/>', () => {
      expect(wrapper.find('ToggleWrapper(Header)')).toHaveLength(1);
    });

    test(' <ToggleWrapper(Header)/> should have props isButtonShown = true', () => {
      expect(
        wrapper.find('ToggleWrapper(Header)').prop('isButtonShown')
      ).toBeTruthy();
    });
  });

  describe('prop browserWidthRatio = BROWSER_WIDTH_RATIO.TABLET_7', () => {
    const wrapper = shallow(
      <HeaderCreator browserWidthRatio={BROWSER_WIDTH_RATIO.TABLET_7} />
    );

    test('should correct render <HeaderCreator /> component ', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render <ToggleWrapper(Header)/>', () => {
      expect(wrapper.find('ToggleWrapper(Header)')).toHaveLength(1);
    });

    test(' <ToggleWrapper(Header)/> should have props isButtonShown = true', () => {
      expect(
        wrapper.find('ToggleWrapper(Header)').prop('isButtonShown')
      ).toBeTruthy();
    });
  });

  describe('prop browserWidthRatio = BROWSER_WIDTH_RATIO.MOBILE', () => {
    const wrapper = shallow(
      <HeaderCreator browserWidthRatio={BROWSER_WIDTH_RATIO.MOBILE} />
    );

    test('should correct render <HeaderCreator /> component ', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('should render <ToggleWrapper(Header)/>', () => {
      expect(wrapper.find('ToggleWrapper(Header)')).toHaveLength(1);
    });

    test(' <ToggleWrapper(Header)/> should have props isButtonShown = true', () => {
      expect(
        wrapper.find('ToggleWrapper(Header)').prop('isButtonShown')
      ).toBeTruthy();
    });
  });
});

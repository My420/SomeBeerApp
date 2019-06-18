import calcBrowserWidthRatio from './calcBrowserWidthRatio';
import { BROWSER_MIN_WIDTH, BROWSER_WIDTH_RATIO } from './constants';

describe('test calcBrowserWidthRatio module', () => {
  test('should return correct ratio for Large PC ', () => {
    expect(calcBrowserWidthRatio(BROWSER_MIN_WIDTH.LPC)).toBe(
      BROWSER_WIDTH_RATIO.LPC
    );
    expect(calcBrowserWidthRatio(BROWSER_MIN_WIDTH.LPC + 600)).toBe(
      BROWSER_WIDTH_RATIO.LPC
    );
  });

  test('should return correct ratio for Middle PC ', () => {
    expect(calcBrowserWidthRatio(BROWSER_MIN_WIDTH.MPC)).toBe(
      BROWSER_WIDTH_RATIO.MPC
    );
    expect(calcBrowserWidthRatio(BROWSER_MIN_WIDTH.LPC - 1)).toBe(
      BROWSER_WIDTH_RATIO.MPC
    );
  });

  test('should return correct ratio for Large Tablet` ', () => {
    expect(calcBrowserWidthRatio(BROWSER_MIN_WIDTH.TABLET_9)).toBe(
      BROWSER_WIDTH_RATIO.TABLET_9
    );
    expect(calcBrowserWidthRatio(BROWSER_MIN_WIDTH.MPC - 1)).toBe(
      BROWSER_WIDTH_RATIO.TABLET_9
    );
  });

  test('should return correct ratio for Small Tablet` ', () => {
    expect(calcBrowserWidthRatio(BROWSER_MIN_WIDTH.TABLET_7)).toBe(
      BROWSER_WIDTH_RATIO.TABLET_7
    );
    expect(calcBrowserWidthRatio(BROWSER_MIN_WIDTH.TABLET_9 - 1)).toBe(
      BROWSER_WIDTH_RATIO.TABLET_7
    );
  });

  test('should return correct ratio for Mobile` ', () => {
    expect(calcBrowserWidthRatio(BROWSER_MIN_WIDTH.TABLET_7 - 1)).toBe(
      BROWSER_WIDTH_RATIO.MOBILE
    );
    expect(calcBrowserWidthRatio(BROWSER_MIN_WIDTH.MOBILE)).toBe(
      BROWSER_WIDTH_RATIO.MOBILE
    );
  });
});

import { BROWSER_MIN_WIDTH, BROWSER_WIDTH_RATIO } from './constants';

const calcBrowserWidthRatio = width => {
  if (width > BROWSER_MIN_WIDTH.LPC) {
    return BROWSER_WIDTH_RATIO.LPC;
  }
  if (width > BROWSER_MIN_WIDTH.MPC) {
    return BROWSER_WIDTH_RATIO.MPC;
  }
  if (width > BROWSER_MIN_WIDTH.TABLET) {
    return BROWSER_WIDTH_RATIO.TABLET_9;
  }
  if (width > BROWSER_MIN_WIDTH.MOBILE) {
    return BROWSER_WIDTH_RATIO.TABLET_7;
  }
  return BROWSER_WIDTH_RATIO.MOBILE;
};

export default calcBrowserWidthRatio;

import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import withResize from '../ResizeContext/ResizeWrapper';
import withToggle from '../HOC/ToggleWrapper/ToggleWrapper';
import { BROWSER_WIDTH_RATIO } from '../../utils/constants';

export const HeaderCreator = ({ browserWidthRatio }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== HeaderCreator');
  const HeaderComponent = withToggle(
    Header,
    !(browserWidthRatio < BROWSER_WIDTH_RATIO.MPC)
  );
  return (
    <HeaderComponent
      isButtonShown={browserWidthRatio < BROWSER_WIDTH_RATIO.MPC}
    />
  );
};

HeaderCreator.propTypes = {
  browserWidthRatio: PropTypes.oneOf([
    BROWSER_WIDTH_RATIO.MOBILE,
    BROWSER_WIDTH_RATIO.TABLET_7,
    BROWSER_WIDTH_RATIO.TABLET_9,
    BROWSER_WIDTH_RATIO.MPC,
    BROWSER_WIDTH_RATIO.LPC
  ]).isRequired
};

export default withResize(HeaderCreator);

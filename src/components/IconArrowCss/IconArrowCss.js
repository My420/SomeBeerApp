import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconArrowCss.module.scss';

const IconArrowCss = ({ size, thickness, direction, className }) => {
  const containerStyle = {
    width: size,
    height: size / 2
  };

  const arrowStyle = {
    width: containerStyle.width,
    height: containerStyle.width,
    borderWidth: `${thickness}px`
  };

  const containerClassName = `${styles.container} ${styles[direction]}`;
  const arrowClassName = `${styles.arrow} ${className}`;

  // eslint-disable-next-line no-console
  console.log('render ===== IconArrowCss');

  return (
    <div style={containerStyle} className={containerClassName}>
      <div className={arrowClassName} style={arrowStyle} />
    </div>
  );
};

IconArrowCss.propTypes = {
  size: PropTypes.number,
  thickness: PropTypes.number,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  className: PropTypes.string
};

IconArrowCss.defaultProps = {
  size: 40,
  thickness: 3,
  direction: 'left',
  className: styles.arrowDefault // for hover, active and other effects
};

export default IconArrowCss;

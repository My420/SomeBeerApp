import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconArrowSvg.module.scss';

const IconArrowSvg = ({ direction, containerClass, pathClass }) => {
  const containerClassName = `${containerClass} ${styles[direction]}`;
  return (
    <div className={containerClassName}>
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          className={pathClass}
          d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
        />
      </svg>
    </div>
  );
};

IconArrowSvg.propTypes = {
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  containerClass: PropTypes.string,
  pathClass: PropTypes.string
};

IconArrowSvg.defaultProps = {
  direction: 'right',
  containerClass: styles.container,
  pathClass: styles.path
};

export default IconArrowSvg;

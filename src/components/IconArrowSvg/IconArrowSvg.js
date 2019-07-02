import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconArrowSvg.module.scss';

const IconArrowSvg = ({ direction, containerClass, pathClass }) => {
  const containerClassName = `${styles.container} ${containerClass} ${
    styles[direction]
  }`;

  // eslint-disable-next-line no-console
  console.log('render ===== IconArrowSvg');

  return (
    <div className={containerClassName}>
      <svg viewBox="0 0 512 512" preserveAspectRatio="xMinYMin meet">
        <path
          className={pathClass}
          d="M352 128.4L319.7 96 160 256l159.7 160 32.3-32.4L224.7 256z"
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
  direction: 'left',
  containerClass: styles.svgContainer,
  pathClass: styles.path
};

export default IconArrowSvg;

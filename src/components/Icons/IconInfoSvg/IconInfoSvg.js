import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconInfoSvg.module.scss';

const IconInfoSvg = ({ containerClass, pathClass }) => {
  return (
    <span className={containerClass}>
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          className={pathClass}
          d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"
        />
      </svg>
    </span>
  );
};

IconInfoSvg.propTypes = {
  containerClass: PropTypes.string,
  pathClass: PropTypes.string
};

IconInfoSvg.defaultProps = {
  containerClass: styles.container,
  pathClass: styles.path
};

export default IconInfoSvg;

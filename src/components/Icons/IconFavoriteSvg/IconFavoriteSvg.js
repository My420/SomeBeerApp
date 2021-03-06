import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconFavoriteSvg.module.scss';

const IconFavoriteSvg = ({ containerClass, pathClass }) => {
  return (
    <span className={containerClass}>
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          className={pathClass}
          d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"
        />
      </svg>
    </span>
  );
};

IconFavoriteSvg.propTypes = {
  containerClass: PropTypes.string,
  pathClass: PropTypes.string
};

IconFavoriteSvg.defaultProps = {
  containerClass: styles.container,
  pathClass: styles.path
};

export default IconFavoriteSvg;

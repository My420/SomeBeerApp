import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconFavoriteFillSvg.module.scss';

const IconFavoriteFillSvg = ({ containerClass, pathClass }) => {
  return (
    <span className={containerClass}>
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          className={pathClass}
          d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
        />
      </svg>
    </span>
  );
};

IconFavoriteFillSvg.propTypes = {
  containerClass: PropTypes.string,
  pathClass: PropTypes.string
};

IconFavoriteFillSvg.defaultProps = {
  containerClass: styles.container,
  pathClass: styles.path
};

export default IconFavoriteFillSvg;

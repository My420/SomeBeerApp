import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconCartSvg.module.scss';

const IconCartSvg = ({ containerClass, pathClass }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== IconCart');

  return (
    <div className={containerClass}>
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          className={pathClass}
          d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"
        />
      </svg>
    </div>
  );
};

IconCartSvg.propTypes = {
  containerClass: PropTypes.string,
  pathClass: PropTypes.string
};

IconCartSvg.defaultProps = {
  containerClass: styles.container,
  pathClass: styles.path
};

export default IconCartSvg;

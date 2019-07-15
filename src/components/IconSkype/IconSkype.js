import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconSkype.module.scss';

const IconSkype = ({ pathClass, wrapperClass }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== IconSkype');

  return (
    <div className={wrapperClass}>
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          className={pathClass}
          d="M22.987 13.966c1.357-7.765-5.416-14.412-13.052-12.979-5.821-3.561-12.503 3.226-8.935 9.029-1.387 7.747 5.384 14.48 13.083 13.01 5.832 3.536 12.493-3.26 8.904-9.06zm-10.603 5.891c-3.181 0-6.378-1.448-6.362-3.941.005-.752.564-1.442 1.309-1.442 1.873 0 1.855 2.795 4.837 2.795 2.093 0 2.807-1.146 2.807-1.944 0-2.886-9.043-1.117-9.043-6.543 0-2.938 2.402-4.962 6.179-4.741 3.602.213 5.713 1.803 5.917 3.289.101.971-.542 1.727-1.659 1.727-1.628 0-1.795-2.181-4.6-2.181-1.266 0-2.334.528-2.334 1.674 0 2.395 8.99 1.005 8.99 6.276-.001 3.039-2.423 5.031-6.041 5.031z"
        />
      </svg>
    </div>
  );
};

IconSkype.propTypes = {
  pathClass: PropTypes.string,
  wrapperClass: PropTypes.string
};

IconSkype.defaultProps = {
  pathClass: styles.path,
  wrapperClass: styles.container
};

export default IconSkype;

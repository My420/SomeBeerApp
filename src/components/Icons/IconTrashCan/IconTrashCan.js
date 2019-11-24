import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconTrashCan.module.scss';

const IconTrashCan = ({ pathClass, wrapperClass }) => {
  return (
    <span className={wrapperClass}>
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          className={pathClass}
          d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"
        />
      </svg>
    </span>
  );
};

IconTrashCan.propTypes = {
  pathClass: PropTypes.string,
  wrapperClass: PropTypes.string
};

IconTrashCan.defaultProps = {
  pathClass: styles.path,
  wrapperClass: styles.container
};

export default IconTrashCan;

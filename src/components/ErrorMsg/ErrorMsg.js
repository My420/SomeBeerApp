import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMsg.module.scss';
import { ERROR_TITLE, ERROR_ACTION } from '../../utils/constants';

const ErrorMsg = ({ errorMsg }) => {
  return (
    <p className={styles.error}>
      <span className={styles.title}>{ERROR_TITLE}</span>
      <span className={styles.action}>{ERROR_ACTION}</span>
      <span className={styles.msg}>{errorMsg}</span>
    </p>
  );
};

export default ErrorMsg;

ErrorMsg.propTypes = {
  errorMsg: PropTypes.string
};

ErrorMsg.defaultProps = {
  errorMsg: ''
};

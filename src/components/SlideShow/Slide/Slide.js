import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slide.module.scss';

const Slide = ({ component, ...attr }) => {
  return (
    <div className={styles.slide} {...attr}>
      {component}
    </div>
  );
};

Slide.propTypes = {
  component: PropTypes.node.isRequired
};

export default Slide;

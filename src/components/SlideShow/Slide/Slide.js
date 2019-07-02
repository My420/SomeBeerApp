import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slide.module.scss';

const Slide = ({ component, ...attr }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== Slide');

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

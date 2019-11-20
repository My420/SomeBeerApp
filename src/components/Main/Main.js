import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';

const Main = ({ children, ...attr }) => {
  return (
    <main className={styles.pageMain} {...attr}>
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;

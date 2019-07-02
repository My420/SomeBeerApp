import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.scss';

const Main = ({ children, ...attr }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== Main');
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

import React from 'react';
import styles from './IconMenuCss.module.scss';

const IconMenuCss = () => {
  // eslint-disable-next-line no-console
  console.log('render ===== IconCrossScss');

  return (
    <div className={styles.container}>
      <div className={styles.menu} />
    </div>
  );
};

export default IconMenuCss;

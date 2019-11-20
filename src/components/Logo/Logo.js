import React from 'react';
import styles from './Logo.module.scss';
import { SHOP_NAME } from '../../utils/constants';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <h1 className={styles.text}>{SHOP_NAME}</h1>
    </div>
  );
};

export default Logo;

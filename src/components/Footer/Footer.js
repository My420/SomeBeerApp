import React from 'react';
import styles from './Footer.module.scss';
import SocialMedia from '../SocialMedia/SocialMedia';
import { AUTHOR } from '../../utils/constants';

const Footer = () => {
  // eslint-disable-next-line no-console
  console.log('render ================================ Footer');
  return (
    <footer className={styles.footer}>
      <p className={styles.information}>
        <span className={styles.copyright}>© 2019 Some Beer Shop.</span>
        <span className={styles.author}>Developed by {AUTHOR}.</span>
      </p>
      <SocialMedia />
    </footer>
  );
};

export default Footer;

import React from 'react';
import styles from './AboutPage.module.scss';
import Main from '../Main/Main';
import Container from '../Container/Container';
import { SHOP_NAME } from '../../utils/constants';

const AboutPage = () => {
  return (
    <Main className={styles.main}>
      <Container className={styles.container}>
        <h2 className="visually-hidden">About</h2>
        <div className={styles.wrapper}>
          <p className={styles.description}>
            <span className={styles.shopName}>{SHOP_NAME}</span> is a fictional
            online beer store created to study front-end development. More
            description on
            <a
              className={styles.link}
              href="https://github.com/My420/SomeBeerApp"
            >
              GitHub
            </a>
            .
          </p>
          <p className={styles.services}>
            This application uses the
            <a className={styles.link} href="https://punkapi.com/">
              Punk API
            </a>
            .
          </p>
        </div>
      </Container>
    </Main>
  );
};

export default AboutPage;

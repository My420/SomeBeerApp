import React from 'react';
import styles from './NotFoundPage.module.scss';
import Main from '../Main/Main';
import Container from '../Container/Container';

const NotFoundPage = () => {
  return (
    <Main className={styles.main}>
      <Container className={styles.container}>
        <section className={styles.page}>
          <h2 className="visually-hidden">Page not found</h2>
          <p className={styles.message}>
            <span className={styles.number}>404</span>
            <br />
            <span className={styles.text}>Page Not Found</span>
          </p>
        </section>
      </Container>
    </Main>
  );
};

export default NotFoundPage;

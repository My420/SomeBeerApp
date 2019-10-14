import React from 'react';
import styles from './FavoritePage.module.scss';
import Main from '../Main/Main';
import Container from '../Container/Container';
import Catalog from '../FavoriteCatalog/FavoriteCatalog';

const FavoritePage = () => {
  // eslint-disable-next-line no-console
  console.log('render ==================== FavoritePage');

  return (
    <Main className={styles.main}>
      <Container className={styles.container}>
        <section className={styles.favoritePage}>
          <h2 className="visually-hidden">Favorite</h2>
          <Catalog />
        </section>
      </Container>
    </Main>
  );
};

export default FavoritePage;

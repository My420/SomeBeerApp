import React from 'react';
import styles from './PopularGoods.module.scss';
import PopularBeerList from '../PopularBeer/PopularBeer';

const PopularGoods = () => {
  // eslint-disable-next-line no-console
  console.log('render ===== PopularGoods');
  return (
    <section className={styles.popular}>
      <h2 className={styles.title}>Most popular</h2>
      <PopularBeerList />
    </section>
  );
};

export default PopularGoods;

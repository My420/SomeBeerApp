import React from 'react';
import PropTypes from 'prop-types';
import { Record } from 'immutable';
import styles from './BeerItem.module.scss';
import BeerItemParameters from './BeerItemParameters/BeerItemParameters';
import FavoriteBtn from '../FavoriteButton/FavoriteButton';
import CartBtn from '../CartButton/CartButton';
import BeerItemDescription from './BeerItemDescription/BeerItemDescription';

const BeerItem = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log('render ================ BeerItem');

  const beerData = data.toJS();
  const {
    name,
    image_url: url,
    tagline,
    description,
    brewers_tips: tips,
    food_pairing: food,
    abv,
    ibu,
    ebc
  } = beerData;

  const parameter = {
    abv,
    ibu,
    ebc
  };

  const beerDescription = {
    Description: description,
    Food: food,
    Tips: tips
  };

  return (
    <section className={styles.beer}>
      <h1 className="visually-hidden">Beer</h1>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={url} alt={name} />
        </div>
        <div className={styles.infoWrapper}>
          <h2 className={styles.name}>{name}</h2>
          <BeerItemParameters parameter={parameter} title={tagline} />
          <div className={styles.actions}>
            <FavoriteBtn itemData={beerData} />
            <CartBtn itemData={beerData} />
          </div>
        </div>
      </div>
      <div className={styles.descriptionWrapper}>
        <BeerItemDescription description={beerDescription} />
      </div>
    </section>
  );
};

BeerItem.propTypes = {
  data: PropTypes.instanceOf(Record).isRequired
};

export default BeerItem;

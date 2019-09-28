import React from 'react';
import PropTypes from 'prop-types';
import { Record } from 'immutable';
import styles from './BeerItem.module.scss';
import BeerItemParameters from './BeerItemParameters/BeerItemParameters';
import FavoriteButton from '../GridItemCard/FavoriteButton/FavoriteButton';
import CartButton from '../GridItemCard/CartButton/CartButton';
import BeerItemDescription from './BeerItemDescription/BeerItemDescription';

const BeerItem = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log('render ================ BeerPage');

  const beerData = data.toJS();
  const {
    name,
    image_url: url,
    tagline,
    description,
    brewers_tips: tips,
    food_pairing: food
  } = beerData;

  const parameter = {
    abv: beerData.abv,
    ibu: beerData.ibu,
    ebc: beerData.ebc
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
            <FavoriteButton itemData={beerData} />
            <CartButton itemData={beerData} />
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

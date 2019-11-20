import React from 'react';
import styles from './SloganLuther.module.scss';
import Picture from '../../Picture/Picture';
import imagePC from './img/beer_glass@PC.jpg';
import imageTablet from './img/beer_glass@Tablet.jpg';
import imageMobile from './img/beer_glass@Mobile.jpg';

const SloganLuther = () => {
  return (
    <article className={styles.container}>
      <h5 className="visually-hidden"> Martin Luther quote</h5>
      <Picture
        className={styles.image}
        alt="beer glass"
        pcSrc={imagePC}
        tabletSrc={imageTablet}
        mobileSrc={imageMobile}
      />
      <blockquote className={styles.quote}>
        <p className={styles.text}>
          «Whoever drinks beer, he is quick to sleep; whoever sleeps long, does
          not sin; whoever does not sin, enters Heaven! Thus, let us drink
          beer!»
        </p>
        <cite className={styles.author}>~ Martin Luther</cite>
      </blockquote>
    </article>
  );
};

export default SloganLuther;

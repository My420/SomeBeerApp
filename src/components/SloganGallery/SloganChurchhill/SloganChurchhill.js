import React from 'react';
import styles from './SloganChurchhill.module.scss';
import Picture from '../../Picture/Picture';
import imagePC from './img/bottle_caps@PC.jpg';
import imageTablet from './img/bottle_caps@Tablet.jpg';
import imageMobile from './img/bottle_caps@Mobile.jpg';

const SloganChurchhill = () => {
  return (
    <article className={styles.container}>
      <h5 className="visually-hidden"> Winston Churchhill quote</h5>
      <Picture
        className={styles.image}
        alt="bottle caps"
        pcSrc={imagePC}
        tabletSrc={imageTablet}
        mobileSrc={imageMobile}
      />
      <blockquote className={styles.quote}>
        <p className={styles.text}>
          «Most people hate the taste of beer—to begin with. It is, however, a
          prejudice»
        </p>
        <cite className={styles.author}>~ Winston Churchhill</cite>
      </blockquote>
    </article>
  );
};

export default SloganChurchhill;

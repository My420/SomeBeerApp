import React from 'react';
import styles from './SloganShakespeare.module.scss';
import Picture from '../../Picture/Picture';
import imagePC from './img/beer_cheers@PC.jpg';
import imageTablet from './img/beer_cheers@Tablet.jpg';
import imageMobile from './img/beer_cheers@Mobile.jpg';

const SloganShakespeare = () => {
  // eslint-disable-next-line no-console
  console.log('render ===== Shakespeare');

  return (
    <article className={styles.container}>
      <h5 className="visually-hidden"> William Shakespeare quote</h5>
      <Picture
        className={styles.image}
        alt="beer cheer"
        pcSrc={imagePC}
        tabletSrc={imageTablet}
        mobileSrc={imageMobile}
      />
      <blockquote className={styles.quote}>
        <p className={styles.text}>«For a quart of Ale is a dish for a king»</p>
        <cite className={styles.author}>~ William Shakespeare</cite>
      </blockquote>
    </article>
  );
};

export default SloganShakespeare;

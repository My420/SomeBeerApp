import React from 'react';
import styles from './SloganJohnnyDepp.module.scss';
import Picture from '../../Picture/Picture';
import imagePC from './img/beer_beach@PC.jpg';
import imageTablet from './img/beer_beach@Tablet.jpg';
import imageMobile from './img/beer_beach@Mobile.jpg';

const SloganJohnnyDepp = () => {
  // eslint-disable-next-line no-console
  console.log('render ===== SloganJohnnyDepp');

  return (
    <article className={styles.container}>
      <h5 className="visually-hidden"> Johnny Depp quote</h5>
      <Picture
        className={styles.image}
        alt="beer cheer"
        pcSrc={imagePC}
        tabletSrc={imageTablet}
        mobileSrc={imageMobile}
      />
      <blockquote className={styles.quote}>
        <p className={styles.text}>
          «I&apos;m an old-fashioned guy... I want to be an old man with a beer
          belly sitting on a porch, looking at a lake or something»
        </p>
        <cite className={styles.author}>~ Johnny Depp</cite>
      </blockquote>
    </article>
  );
};

export default SloganJohnnyDepp;

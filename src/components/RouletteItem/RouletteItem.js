import React from 'react';
import styles from './RouletteItem.module.scss';

const RouletteItem = ({ data }) => {
  const { image_url: url, name } = data;
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={url} alt={name} />
    </div>
  );
};

export default RouletteItem;

import React from 'react';
import styles from './RouletteItem.module.scss';

const RouletteItem = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log('render ============= RouletteItem');
  const { image_url: url, name } = data;
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={url} alt={name} />
    </div>
  );
};

export default RouletteItem;

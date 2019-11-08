import React from 'react';
import PropTypes from 'prop-types';
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

RouletteItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired
};

export default RouletteItem;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './GridCardDescription.module.scss';

const GridCardDescription = ({ parameter, title }) => {
  const description = Object.keys(parameter).map(key => {
    return [
      <dt className={styles.name} key={`${key}-dt`}>
        {key}
      </dt>,
      <dd className={styles.value} key={`${key}-dd`}>
        {parameter[key]}
      </dd>
    ];
  });

  return (
    <div className={styles.description}>
      <p className={styles.title}>{title}</p>
      <dl className={styles.parameter}>{description}</dl>
    </div>
  );
};

GridCardDescription.propTypes = {
  parameter: PropTypes.exact({
    abv: PropTypes.number,
    ebc: PropTypes.number,
    ibu: PropTypes.number
  }).isRequired,
  title: PropTypes.string.isRequired
};

export default GridCardDescription;

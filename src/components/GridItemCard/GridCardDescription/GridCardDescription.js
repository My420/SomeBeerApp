import React from 'react';
import styles from './GridCardDescription.module.scss';

const GridCardDescription = ({ parameter, title }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== GridCardDescription');

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

export default GridCardDescription;

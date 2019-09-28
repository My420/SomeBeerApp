import React from 'react';
import styles from './BeerItemParameters.module.scss';
import { ParamMap } from '../../../utils/constants';

const BeerItemParameters = ({ parameter, title }) => {
  const parameters = Object.keys(parameter).map(key => {
    return [
      <dt className={styles.name} key={`${key}-dt`}>
        {ParamMap[key]}
      </dt>,
      <dd className={styles.value} key={`${key}-dd`}>
        {parameter[key]}
      </dd>
    ];
  });

  return (
    <div className={styles.description}>
      <p className={styles.title}>{title}</p>
      <dl className={styles.parameters}>{parameters}</dl>
    </div>
  );
};

export default BeerItemParameters;

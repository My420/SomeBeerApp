import React from 'react';
import qs from 'querystringify';
import styles from './CatalogPage.module.scss';
import Main from '../Main/Main';
import Catalog from '../Catalog/Catalog';
import Container from '../Container/Container';
import {
  BEER_NAME_PROP,
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP,
  PAGE
} from '../../utils/constants';

const CatalogPage = ({ location, history }) => {
  // eslint-disable-next-line no-console
  console.log('render ==================== CatalogPage');
  const { search } = location;
  const parseSearch = qs.parse(search);
  const catalogState = {
    [PAGE]: parseSearch[PAGE] || 1,
    [BEER_NAME_PROP]: parseSearch[BEER_NAME_PROP] || '',
    [ABV_LESS_PROP]: parseSearch[ABV_LESS_PROP] || 0,
    [ABV_MORE_PROP]: parseSearch[ABV_MORE_PROP] || 0,
    [IBU_LESS_PROP]: parseSearch[IBU_LESS_PROP] || 0,
    [IBU_MORE_PROP]: parseSearch[IBU_MORE_PROP] || 0,
    [EBC_LESS_PROP]: parseSearch[EBC_LESS_PROP] || 0,
    [EBC_MORE_PROP]: parseSearch[EBC_MORE_PROP] || 0
  };
  return (
    <Main className={styles.main}>
      <Container className={styles.container}>
        <Catalog initialState={catalogState} history={history} />
      </Container>
    </Main>
  );
};

export default CatalogPage;

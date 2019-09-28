import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemPage.module.scss';
import Main from '../Main/Main';
import Container from '../Container/Container';
import CatalogBeerPage from '../BeerPage/BeerPage';

const ItemPage = ({ match }) => {
  // eslint-disable-next-line no-console
  console.log('render ==================== ItemPage');
  const { id } = match.params;

  return (
    <Main className={styles.main}>
      <Container className={styles.container}>
        <CatalogBeerPage id={id} />
      </Container>
    </Main>
  );
};

ItemPage.propTypes = {
  match: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default ItemPage;

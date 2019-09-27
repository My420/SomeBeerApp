import React from 'react';
import PropTypes from 'prop-types';
import qs from 'querystringify';
import styles from './CatalogPage.module.scss';
import Main from '../Main/Main';
import BeerCatalog from '../Catalog/Catalog';
import Container from '../Container/Container';
import validateOptions from '../../utils/validateOptions';

const CatalogPage = ({ location, history }) => {
  // eslint-disable-next-line no-console
  console.log('render ==================== CatalogPage');
  const { search } = location;
  const parseSearch = qs.parse(search);
  const options = validateOptions(parseSearch);
  return (
    <Main className={styles.main}>
      <Container className={styles.container}>
        <section className={styles.catalogPage}>
          <h2 className="visually-hidden">Catalog</h2>
          <BeerCatalog options={options} history={history} />
        </section>
      </Container>
    </Main>
  );
};

CatalogPage.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default CatalogPage;

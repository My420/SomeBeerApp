import React from 'react';
import styles from './CatalogFilter.module.scss';
import BeerName from './BeerName/BeerName';
import Button from '../Button/Button';
import Abv from './Abv/Abv';
import Ibu from './Ibu/Ibu';
import Ebc from './Ebc/Ebc';
import createCatalogRequestAddress from '../../utils/createCatalogRequestAddress';
import {
  BEER_NAME_PROP,
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP
} from '../../utils/constants';

class CatalogFilter extends React.Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = { ...value };
  }

  onPropertyChange = (value, property) => {
    this.setState({ [property]: value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    createCatalogRequestAddress(this.state);
  };

  render() {
    // eslint-disable-next-line no-console
    console.log('render ========== CatalogFilter');

    const {
      [BEER_NAME_PROP]: name,
      [ABV_LESS_PROP]: abvLess,
      [ABV_MORE_PROP]: abvMore,
      [IBU_LESS_PROP]: ibuLess,
      [IBU_MORE_PROP]: ibuMore,
      [EBC_LESS_PROP]: ebcLess,
      [EBC_MORE_PROP]: ebcMore
    } = this.state;

    return (
      <section className={styles.filter}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <BeerName value={name} onPropertyChange={this.onPropertyChange} />
          <Button className={styles.submit} type="submit">
            Apply
          </Button>
          <Abv
            lessValue={abvLess}
            moreValue={abvMore}
            onPropertyChange={this.onPropertyChange}
          />
          <Ibu
            lessValue={ibuLess}
            moreValue={ibuMore}
            onPropertyChange={this.onPropertyChange}
          />
          <Ebc
            lessValue={ebcLess}
            moreValue={ebcMore}
            onPropertyChange={this.onPropertyChange}
          />
        </form>
      </section>
    );
  }
}

export default CatalogFilter;

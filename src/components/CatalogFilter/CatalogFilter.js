import React from 'react';
import PropTypes from 'prop-types';
import styles from './CatalogFilter.module.scss';
import BeerName from './BeerName/BeerName';
import Button from '../Button/Button';
import createOptions from '../../utils/createOptions';
import compareOptions from '../../utils/compareOptions';
import Options from './Parameters/Parameters';
import IconSearchSvg from '../IconSearchSvg/IconSearchSvg';
import {
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP,
  PAGE,
  BEER_NAME_PROP
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
    const { history, value } = this.props;
    if (!compareOptions(this.state, value)) {
      const options = createOptions({ ...this.state, [PAGE]: '1' });
      history.push(options);
    }
  };

  render() {
    const { [BEER_NAME_PROP]: name } = this.state;

    return (
      <section className={styles.filter}>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <div className={styles.nameWrapper}>
            <BeerName value={name} onPropertyChange={this.onPropertyChange} />
            <Button className={styles.submit} type="submit">
              <IconSearchSvg pathClass={styles.path} />
              <span className="visually-hidden">Apply</span>
            </Button>
          </div>
          <Options
            options={this.state}
            onPropertyChange={this.onPropertyChange}
          />
        </form>
      </section>
    );
  }
}

CatalogFilter.propTypes = {
  value: PropTypes.shape({
    [PAGE]: PropTypes.string.isRequired,
    [BEER_NAME_PROP]: PropTypes.string.isRequired,
    [ABV_LESS_PROP]: PropTypes.string.isRequired,
    [ABV_MORE_PROP]: PropTypes.string.isRequired,
    [IBU_LESS_PROP]: PropTypes.string.isRequired,
    [IBU_MORE_PROP]: PropTypes.string.isRequired,
    [EBC_LESS_PROP]: PropTypes.string.isRequired,
    [EBC_MORE_PROP]: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default CatalogFilter;

import React from 'react';
import styles from './CatalogFilter.module.scss';
import BeerName from './BeerName/BeerName';
import Button from '../Button/Button';
import { PAGE, BEER_NAME_PROP } from '../../utils/constants';
import createOptions from '../../utils/createOptions';
import compareOptions from '../../utils/compareOptions';
import Parameters from './Parameters/Parameters';
import IconSearchSvg from '../IconSearchSvg/IconSearchSvg';

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
    // eslint-disable-next-line no-console
    console.log('render ========== CatalogFilter');

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
          <Parameters
            options={this.state}
            onPropertyChange={this.onPropertyChange}
          />
        </form>
      </section>
    );
  }
}

export default CatalogFilter;

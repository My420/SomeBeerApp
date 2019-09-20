import React from 'react';
import styles from './BeerName.module.scss';
import {
  BEER_NAME_PROP,
  SEARCH_INPUT_MAX_LENGTH
} from '../../../utils/constants';

class BeerName extends React.PureComponent {
  onBeerNameChange = evt => {
    const { onPropertyChange } = this.props;
    const name = evt.target.value;
    onPropertyChange(name, BEER_NAME_PROP);
  };

  render() {
    // eslint-disable-next-line no-console
    console.log('render ========== BeerNameInput');

    const { value } = this.props;
    return (
      <fieldset className={styles.nameField}>
        <legend className="visually-hidden">Beer Name</legend>
        <input
          className={styles.nameInput}
          type="text"
          value={value}
          placeholder="search"
          maxLength={SEARCH_INPUT_MAX_LENGTH}
          onChange={this.onBeerNameChange}
        />
      </fieldset>
    );
  }
}

export default BeerName;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './BeerName.module.scss';
import {
  BEER_NAME_PROP,
  SEARCH_INPUT_MAX_LENGTH
} from '../../../utils/constants';

const BeerName = ({ value, onPropertyChange }) => {
  const onBeerNameChange = evt => {
    const name = evt.target.value;
    onPropertyChange(name, BEER_NAME_PROP);
  };

  return (
    <fieldset className={styles.nameField}>
      <legend className="visually-hidden">Beer Name</legend>
      <input
        className={styles.nameInput}
        type="text"
        value={value}
        placeholder="search"
        maxLength={SEARCH_INPUT_MAX_LENGTH}
        onChange={onBeerNameChange}
      />
    </fieldset>
  );
};

BeerName.propTypes = {
  value: PropTypes.string.isRequired,
  onPropertyChange: PropTypes.func.isRequired
};

export default BeerName;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Abv.module.scss';
import {
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  ABV_BOTTOM_VALUE,
  ABV_TOP_VALUE
} from '../../../../../utils/constants';
import validateNumberValue from '../../../../../utils/validateNumberValue';

const Abv = ({ lessValue, moreValue, onPropertyChange }) => {
  const onABVChange = evt => {
    const value = validateNumberValue(
      evt.target.value,
      ABV_BOTTOM_VALUE,
      ABV_TOP_VALUE
    );
    const direction = evt.target.name;
    if (direction === 'abvLess') {
      onPropertyChange(value, ABV_LESS_PROP);
    } else if (direction === 'abvMore') {
      onPropertyChange(value, ABV_MORE_PROP);
    }
  };

  return (
    <fieldset className={styles.abvField}>
      <legend className={styles.abvLegend}>Alcohol By Volume</legend>
      <div className={styles.abvInner}>
        <label className={styles.abvLabelMore} htmlFor="abvMore">
          <span className={styles.textMore}>more than</span>
          <input
            id="abvMore"
            name="abvMore"
            className={styles.abvInputMore}
            type="number"
            value={moreValue}
            onChange={onABVChange}
          />
        </label>
        <label className={styles.abvLabelLess} htmlFor="abvLess">
          <span className={styles.textLess}>less than</span>
          <input
            id="abvLess"
            name="abvLess"
            className={styles.abvInputLess}
            type="number"
            value={lessValue}
            onChange={onABVChange}
          />
        </label>
      </div>
    </fieldset>
  );
};

Abv.propTypes = {
  lessValue: PropTypes.string.isRequired,
  moreValue: PropTypes.string.isRequired,
  onPropertyChange: PropTypes.func.isRequired
};

export default Abv;

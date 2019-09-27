import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ibu.module.scss';
import validateNumberValue from '../../../../../utils/validateNumberValue';
import {
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  IBU_BOTTOM_VALUE,
  IBU_TOP_VALUE
} from '../../../../../utils/constants';

const Ibu = ({ lessValue, moreValue, onPropertyChange }) => {
  const onIBUChange = evt => {
    const value = validateNumberValue(
      evt.target.value,
      IBU_BOTTOM_VALUE,
      IBU_TOP_VALUE
    );
    const direction = evt.target.name;
    if (direction === 'ibuLess') {
      onPropertyChange(value, IBU_LESS_PROP);
    } else if (direction === 'ibuMore') {
      onPropertyChange(value, IBU_MORE_PROP);
    }
  };
  return (
    <fieldset className={styles.ibuField}>
      <legend className={styles.ibuLegend}>
        International Bitterness Unit
      </legend>
      <div className={styles.ibuInner}>
        <label className={styles.ibuLabelMore} htmlFor="ibuMore">
          <span className={styles.textMore}>more than</span>
          <input
            id="ibuMore"
            name="ibuMore"
            className={styles.ibuInputMore}
            type="number"
            value={moreValue}
            onChange={onIBUChange}
          />
        </label>
        <label className={styles.ibuLabelLess} htmlFor="ibuLess">
          <span className={styles.textLess}>less than</span>
          <input
            id="ibuLess"
            name="ibuLess"
            className={styles.ibuInputLess}
            type="number"
            value={lessValue}
            onChange={onIBUChange}
          />
        </label>
      </div>
    </fieldset>
  );
};

Ibu.propTypes = {
  lessValue: PropTypes.string.isRequired,
  moreValue: PropTypes.string.isRequired,
  onPropertyChange: PropTypes.func.isRequired
};

export default Ibu;

import React from 'react';
import styles from './Ebc.module.scss';
import {
  EBC_LESS_PROP,
  EBC_MORE_PROP,
  EBC_BOTTOM_VALUE,
  EBC_TOP_VALUE
} from '../../../../../utils/constants';
import validateNumberValue from '../../../../../utils/validateNumberValue';

class Ebc extends React.PureComponent {
  onEBCChange = evt => {
    const { onPropertyChange } = this.props;
    const value = validateNumberValue(
      evt.target.value,
      EBC_BOTTOM_VALUE,
      EBC_TOP_VALUE
    );
    const direction = evt.target.name;
    if (direction === 'ebcLess') {
      onPropertyChange(value, EBC_LESS_PROP);
    } else if (direction === 'ebcMore') {
      onPropertyChange(value, EBC_MORE_PROP);
    }
  };

  render() {
    // eslint-disable-next-line no-console
    console.log('render ========== EbcInput');

    const { lessValue, moreValue } = this.props;
    return (
      <fieldset className={styles.ebcField}>
        <legend className={styles.ebcLegend}>Color Units Ebc</legend>
        <div className={styles.ebcInner}>
          <label className={styles.ebcLabelMore} htmlFor="ebcMore">
            <span className={styles.textMore}>more than</span>
            <input
              id="ebcMore"
              name="ebcMore"
              className={styles.ebcInputMore}
              type="number"
              value={moreValue}
              onChange={this.onEBCChange}
            />
          </label>
          <label className={styles.ebcLabelLess} htmlFor="ebcLess">
            <span className={styles.textLess}>less than</span>
            <input
              id="ebcLess"
              name="ebcLess"
              className={styles.ebcInputLess}
              type="number"
              value={lessValue}
              onChange={this.onEBCChange}
            />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default Ebc;
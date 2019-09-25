import React from 'react';
import styles from './Ibu.module.scss';
import validateNumberValue from '../../../../../utils/validateNumberValue';
import {
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  IBU_BOTTOM_VALUE,
  IBU_TOP_VALUE
} from '../../../../../utils/constants';

class Ibu extends React.PureComponent {
  onIBUChange = evt => {
    const { onPropertyChange } = this.props;
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

  render() {
    // eslint-disable-next-line no-console
    console.log('render ========== IbuInput');

    const { lessValue, moreValue } = this.props;
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
              onChange={this.onIBUChange}
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
              onChange={this.onIBUChange}
            />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default Ibu;

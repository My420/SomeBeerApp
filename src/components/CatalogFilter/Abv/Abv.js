import React from 'react';
import styles from './Abv.module.scss';
import {
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  ABV_BOTTOM_VALUE,
  ABV_TOP_VALUE
} from '../../../utils/constants';
import validateNumberValue from '../../../utils/validateNumberValue';

class Abv extends React.PureComponent {
  onABVChange = evt => {
    const { onPropertyChange } = this.props;
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

  render() {
    // eslint-disable-next-line no-console
    console.log('render ========== AbvInput');

    const { lessValue, moreValue } = this.props;
    return (
      <fieldset className={styles.abvField}>
        <legend className={styles.abvlegend}>Alcohol By Volume</legend>
        <label className={styles.abvLabelMore} htmlFor="abvMore">
          {'More'}
          <input
            id="abvMore"
            name="abvMore"
            className={styles.abvInputMore}
            type="number"
            value={moreValue}
            onChange={this.onABVChange}
          />
        </label>
        <label className={styles.abvLabelLess} htmlFor="abvLess">
          {'Less'}
          <input
            id="abvLess"
            name="abvLess"
            className={styles.abvInputLess}
            type="number"
            value={lessValue}
            onChange={this.onABVChange}
          />
        </label>
      </fieldset>
    );
  }
}

export default Abv;

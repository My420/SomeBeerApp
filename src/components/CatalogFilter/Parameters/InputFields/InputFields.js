import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputFields.module.scss';
import Abv from './Abv/Abv';
import Ibu from './Ibu/Ibu';
import Ebc from './Ebc/Ebc';
import {
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP
} from '../../../../utils/constants';

const InputFields = ({ options, onPropertyChange }) => {
  const {
    [ABV_LESS_PROP]: abvLess,
    [ABV_MORE_PROP]: abvMore,
    [IBU_LESS_PROP]: ibuLess,
    [IBU_MORE_PROP]: ibuMore,
    [EBC_LESS_PROP]: ebcLess,
    [EBC_MORE_PROP]: ebcMore
  } = options;

  return (
    <div className={styles.wrapper}>
      <Abv
        lessValue={abvLess}
        moreValue={abvMore}
        onPropertyChange={onPropertyChange}
      />
      <Ibu
        lessValue={ibuLess}
        moreValue={ibuMore}
        onPropertyChange={onPropertyChange}
      />
      <Ebc
        lessValue={ebcLess}
        moreValue={ebcMore}
        onPropertyChange={onPropertyChange}
      />
    </div>
  );
};

InputFields.propTypes = {
  options: PropTypes.shape({
    [ABV_LESS_PROP]: PropTypes.string.isRequired,
    [ABV_MORE_PROP]: PropTypes.string.isRequired,
    [IBU_LESS_PROP]: PropTypes.string.isRequired,
    [IBU_MORE_PROP]: PropTypes.string.isRequired,
    [EBC_LESS_PROP]: PropTypes.string.isRequired,
    [EBC_MORE_PROP]: PropTypes.string.isRequired
  }).isRequired,
  onPropertyChange: PropTypes.func.isRequired
};

export default InputFields;

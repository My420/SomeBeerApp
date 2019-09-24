import {
  BEER_NAME_PROP,
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP,
  PAGE
} from './constants';

const validateOptions = options => {
  return {
    [PAGE]: options[PAGE] || '1',
    [BEER_NAME_PROP]: options[BEER_NAME_PROP] || '',
    [ABV_LESS_PROP]: options[ABV_LESS_PROP] || '0',
    [ABV_MORE_PROP]: options[ABV_MORE_PROP] || '0',
    [IBU_LESS_PROP]: options[IBU_LESS_PROP] || '0',
    [IBU_MORE_PROP]: options[IBU_MORE_PROP] || '0',
    [EBC_LESS_PROP]: options[EBC_LESS_PROP] || '0',
    [EBC_MORE_PROP]: options[EBC_MORE_PROP] || '0'
  };
};

export default validateOptions;

import qs from 'querystringify';
import transformUserInput from './transformUserInput';
import {
  API_HOST,
  BEER_NAME_PROP,
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP,
  PAGE,
  PER_PAGE,
  CATALOG_BEER_AMOUNT
} from './constants';

const createCatalogRequestAddress = props => {
  const options = {};
  options[PAGE] = props[PAGE] || 1;
  options[PER_PAGE] = CATALOG_BEER_AMOUNT;
  if (props[BEER_NAME_PROP])
    options[BEER_NAME_PROP] = transformUserInput(props[BEER_NAME_PROP]);
  if (props[ABV_LESS_PROP]) options[ABV_LESS_PROP] = props[ABV_LESS_PROP];
  if (props[ABV_MORE_PROP]) options[ABV_MORE_PROP] = props[ABV_MORE_PROP];
  if (props[IBU_LESS_PROP]) options[IBU_LESS_PROP] = props[IBU_LESS_PROP];
  if (props[IBU_MORE_PROP]) options[IBU_MORE_PROP] = props[IBU_MORE_PROP];
  if (props[EBC_LESS_PROP]) options[EBC_LESS_PROP] = props[EBC_LESS_PROP];
  if (props[EBC_MORE_PROP]) options[EBC_MORE_PROP] = props[EBC_MORE_PROP];

  const stringOptions = qs.stringify(options, true);
  const request = `${API_HOST}${stringOptions}`;

  return request;
};

export default createCatalogRequestAddress;

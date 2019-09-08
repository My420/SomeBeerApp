import { Map } from 'immutable';
import BeerDataRecord from './BeerDataRecord';

const convertFavoriteToImmutable = obj => {
  let immutableData = Map({});
  const keys = Object.keys(obj);

  keys.forEach(key => {
    const elem = BeerDataRecord(obj[key]);
    immutableData = immutableData.set(+key, elem); // key must be Number so use +key (22 not "22");
  });

  return immutableData;
};

export default convertFavoriteToImmutable;

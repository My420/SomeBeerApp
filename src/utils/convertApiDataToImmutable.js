import { List } from 'immutable';
import BeerDataRecord from './BeerDataRecord';

const convertApiDataToImmutable = data => {
  let immutableData = List([]);
  for (let i = 0; i < data.length; i += 1) {
    const elem = BeerDataRecord(data[i]);
    immutableData = immutableData.push(elem);
  }
  return immutableData;
};

export default convertApiDataToImmutable;

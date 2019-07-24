import { OrderedMap } from 'immutable';
import BeerDataRecord from './BeerDataRecord';

const convertApiDataToImmutable = data => {
  let immutableData = new OrderedMap({});
  for (let i = 0; i < data.length; i += 1) {
    const elem = new BeerDataRecord(data[i]);
    const { id } = elem;
    immutableData = immutableData.set(id, elem);
  }
  return immutableData;
};

export default convertApiDataToImmutable;

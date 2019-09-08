import { Map, Record } from 'immutable';
import convertFavoriteToImmutable from './convertFavoriteToImmutable';

describe('test convertFavoriteToImmutable function', () => {
  const data = { 1: { id: 1 }, 2: { id: 2 }, 3: { id: 3 } };

  const immutableData = convertFavoriteToImmutable(data);

  test('function should return Immutable Map', () => {
    expect(Map.isMap(immutableData)).toBeTruthy();
  });

  test('Map should contain Record ', () => {
    immutableData.map(v => {
      expect(v.constructor.name).toBe('Record');
      return v;
    });
  });

  test('Record has Descriptive Name  = BeerDataRecord ', () => {
    immutableData.map(v => {
      expect(Record.getDescriptiveName(v)).toBe('BeerDataRecord');
      return v;
    });
  });

  test('should correct convert data', () => {
    expect(immutableData.get(1).id).toEqual(data[1].id);
    expect(immutableData.get(2).id).toEqual(data[2].id);
    expect(immutableData.get(3).id).toEqual(data[3].id);
  });
});

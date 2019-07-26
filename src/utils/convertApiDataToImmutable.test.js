import { isImmutable, Record } from 'immutable';
import convertApiDataToImmutable from './convertApiDataToImmutable';

describe('test convertApiDataToImmutable function', () => {
  const data = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const immutableData = convertApiDataToImmutable(data);

  test('function should return Immutable Collection or Record', () => {
    expect(isImmutable(immutableData)).toBeTruthy();
  });

  test('function should return OrderedMap', () => {
    expect(immutableData.constructor.name).toBe('List');
  });

  test('OrderedMap should contain Record ', () => {
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
    expect(immutableData.get(0).id).toEqual('a');
    expect(immutableData.get(1).id).toEqual('b');
    expect(immutableData.get(2).id).toEqual('c');
  });
});

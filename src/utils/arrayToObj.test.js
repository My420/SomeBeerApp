import arrayToObj from './arrayToObj';

describe('test arrayToObj function', () => {
  const data = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];
  const expectedData = { a: { id: 'a' }, b: { id: 'b' }, c: { id: 'c' } };
  test('function should works correct', () => {
    expect(arrayToObj(data)).toEqual(expectedData);
  });
});

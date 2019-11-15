import createRouletteRequestAddress from './createRouletteRequestAddress';
import { API_HOST } from './constants';

describe('testing createRouletteRequestStatus function', () => {
  const apiRequestRegExp = /https:\/\/api\.punkapi\.com\/v2\/beers\?page=\d\d?&per_page=\d\d?/;
  test('request address has type string', () => {
    expect(createRouletteRequestAddress()).toEqual(expect.any(String));
  });

  test('request address contain API_HOST', () => {
    expect(createRouletteRequestAddress()).toEqual(
      expect.stringContaining(API_HOST)
    );
  });

  test('request address match regExp', () => {
    expect(createRouletteRequestAddress()).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
  });
});

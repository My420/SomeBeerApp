import createPopularBeerRequestAddress from './createPopularBeerRequestAddress';
import { API_HOST } from './constants';

describe('testing createPopularBeerRequestStatus function', () => {
  const apiRequestRegExp = /https:\/\/api\.punkapi\.com\/v2\/beers\?page=\d\d?&per_page=\d\d?/;
  test('request address has type string', () => {
    expect(createPopularBeerRequestAddress()).toEqual(expect.any(String));
  });

  test('request address contain API_HOST', () => {
    expect(createPopularBeerRequestAddress()).toEqual(
      expect.stringContaining(API_HOST)
    );
  });

  test('request address match regExp', () => {
    expect(createPopularBeerRequestAddress()).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
  });
});

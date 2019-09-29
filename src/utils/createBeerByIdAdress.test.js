import * as fc from 'fast-check';
import createBeerByIdAdress from './createBeerByIdAdress';
import { API_HOST } from './constants';

describe('testing createBeerByIdAdress function', () => {
  const apiRequestRegExp = /https:\/\/api\.punkapi\.com\/v2\/beers\/\d\d*/;

  test('request address has type string', () => {
    expect(createBeerByIdAdress(1)).toEqual(expect.any(String));
  });

  test('request address contain API_HOST', () => {
    expect(createBeerByIdAdress(1)).toEqual(expect.stringContaining(API_HOST));
  });

  test('request address match regExp with random id', () => {
    fc.assert(
      fc.property(fc.nat(), id => {
        expect(createBeerByIdAdress(id)).toEqual(
          expect.stringMatching(apiRequestRegExp)
        );
      })
    );
  });
});

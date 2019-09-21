import * as fc from 'fast-check';
import createCatalogRequestAddress from './createCatalogRequestAddress';
import {
  API_HOST,
  BEER_NAME_PROP,
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_MORE_PROP,
  IBU_LESS_PROP,
  EBC_MORE_PROP,
  EBC_LESS_PROP,
  SEARCH_INPUT_MAX_LENGTH,
  PAGE
} from './constants';

describe('testing CatalogRequestRequestStatus function', () => {
  const apiRequestRegExp = /https:\/\/api\.punkapi\.com\/v2\/beers\?page=\d\d?&per_page=\d\d?(&beer_name=[^&]*)?(&abv_lt=\d{1,2})?(&abv_gt=\d{1,2})?(&ibu_lt=\d{1,4})?(&ibu_gt=\d{1,4})?(&ebc_lt=\d{1,3})?(&ebc_gt=\d{1,3})?/;

  test('request address has type string', () => {
    expect(createCatalogRequestAddress({})).toEqual(expect.any(String));
  });

  test('request address contain API_HOST', () => {
    expect(createCatalogRequestAddress({})).toEqual(
      expect.stringContaining(API_HOST)
    );
  });

  test('request address match regExp without options', () => {
    expect(createCatalogRequestAddress({})).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
  });

  test(`request address match regExp with ${BEER_NAME_PROP} options`, () => {
    expect(createCatalogRequestAddress({ [BEER_NAME_PROP]: 'test' })).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
    expect(
      createCatalogRequestAddress({ [BEER_NAME_PROP]: 'test_test' })
    ).toEqual(expect.stringMatching(apiRequestRegExp));
  });

  test('request address match regExp with ABV options', () => {
    expect(createCatalogRequestAddress({ [ABV_MORE_PROP]: 24 })).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
    expect(createCatalogRequestAddress({ [ABV_LESS_PROP]: 11 })).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
  });

  test('request address match regExp with IBU options', () => {
    expect(createCatalogRequestAddress({ [IBU_MORE_PROP]: 24 })).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
    expect(createCatalogRequestAddress({ [IBU_LESS_PROP]: 11 })).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
  });

  test('request address match regExp with EBC options', () => {
    expect(createCatalogRequestAddress({ [EBC_MORE_PROP]: 24 })).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
    expect(createCatalogRequestAddress({ [EBC_LESS_PROP]: 11 })).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
  });
  test('request address match regExp with random correct options', () => {
    const options1 = {
      [EBC_MORE_PROP]: 24,
      [BEER_NAME_PROP]: 'test',
      [IBU_LESS_PROP]: 11
    };

    const options2 = {
      [IBU_LESS_PROP]: 1,
      [EBC_MORE_PROP]: 24,
      [ABV_MORE_PROP]: 10,
      [EBC_LESS_PROP]: 11
    };

    expect(createCatalogRequestAddress(options1)).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
    expect(createCatalogRequestAddress(options2)).toEqual(
      expect.stringMatching(apiRequestRegExp)
    );
  });

  test('request address match regExp with random incorrect options', () => {
    fc.assert(
      fc.property(fc.dictionary(fc.string(10), fc.string(10)), options => {
        expect(createCatalogRequestAddress(options)).toEqual(
          expect.stringMatching(apiRequestRegExp)
        );
      })
    );
  });

  test('request address match regExp with random correct options', () => {
    const optionsKey = [
      PAGE,
      ABV_LESS_PROP,
      ABV_MORE_PROP,
      IBU_MORE_PROP,
      IBU_LESS_PROP,
      EBC_MORE_PROP,
      EBC_LESS_PROP
    ];
    fc.assert(
      fc.property(
        fc.string(SEARCH_INPUT_MAX_LENGTH),
        fc.array(fc.integer(0, 99), 1, 7),
        (name, values) => {
          const options = { [BEER_NAME_PROP]: name };
          for (let i = 0; i < values.length; i += 1) {
            options[optionsKey[i]] = values[i];
          }
          expect(createCatalogRequestAddress(options)).toEqual(
            expect.stringMatching(apiRequestRegExp)
          );
        }
      )
    );
  });
});

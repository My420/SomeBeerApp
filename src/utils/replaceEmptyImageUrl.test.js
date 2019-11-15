import replaceEmptyImageUrl from './replaceEmptyImageUrl';
import { DEFAULT_BEER_IMAGE } from './constants';

describe('test replaceEmptyImageUrl function', () => {
  test('function should replace null', () => {
    expect(replaceEmptyImageUrl(null)).toBe(DEFAULT_BEER_IMAGE);
  });

  test('function should not replace string value', () => {
    const url = 'http:/test/url';
    expect(replaceEmptyImageUrl(url)).toBe(url);
  });
});

import { DEFAULT_BEER_IMAGE } from './constants';

const replaceEmptyImageUrl = url => {
  return url || DEFAULT_BEER_IMAGE;
};

export default replaceEmptyImageUrl;

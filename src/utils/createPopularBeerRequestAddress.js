import { API_HOST, POPULAR_BEER_AMOUNT } from './constants';

const createPopularBeerRequestAddress = () => {
  const day = new Date().getDay();
  const pageNumber = (day + 1) * 4;

  const request = `${API_HOST}?page=${pageNumber}&per_page=${POPULAR_BEER_AMOUNT}`;

  return request;
};

export default createPopularBeerRequestAddress;

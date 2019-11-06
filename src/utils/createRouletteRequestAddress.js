import { API_HOST, ROULETTE_CELLS_AMOUNT, API_ITEM_AMOUNT } from './constants';
import random from './random';

const createPopularBeerRequestAddress = () => {
  const maxPage = Math.floor(API_ITEM_AMOUNT / ROULETTE_CELLS_AMOUNT);
  const page = random(1, maxPage);

  const request = `${API_HOST}?page=${page}&per_page=${ROULETTE_CELLS_AMOUNT}`;

  return request;
};

export default createPopularBeerRequestAddress;

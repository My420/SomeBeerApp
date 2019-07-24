import { API_HOST, POPULAR_BEER_AMOUNT, LOAD_ERROR_MESSAGE } from './constants';
import checkStatus from './checkStatus';

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const getPupularBeer = async () => {
  const day = new Date().getDay();
  const pageNumber = (day + 1) * 4;

  const apiRequest = `${API_HOST}beers?page=${pageNumber}&per_page=${POPULAR_BEER_AMOUNT}`;

  try {
    let response = await window.fetch(apiRequest);
    response = await checkStatus(response);
    const data = await response.json();
    return data;
  } catch (response) {
    const data = await response.json();
    console.error(data);
    throw new Error(LOAD_ERROR_MESSAGE);
  }
};

export default getPupularBeer;

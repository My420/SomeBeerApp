import checkStatus from './checkStatus';

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

const getDataFromAPI = async adress => {
  try {
    let response = await window.fetch(adress);
    response = checkStatus(response);
    response = await response.json();
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getDataFromAPI;

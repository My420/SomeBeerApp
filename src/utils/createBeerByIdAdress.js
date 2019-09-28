import { API_HOST } from './constants';

const createBeerByIdAdress = id => {
  const request = `${API_HOST}/${id}`;

  return request;
};

export default createBeerByIdAdress;

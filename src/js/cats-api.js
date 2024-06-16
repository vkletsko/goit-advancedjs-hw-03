import { BASE_URL, API_KEY } from './config.js';
import { errorNotificationOptions } from './error-handler.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
};

export const fetchBreeds = async () => {
  try {
    const response = await fetch(`${BASE_URL}/breeds`, requestOptions);
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (error) {
    iziToast.error(errorNotificationOptions);
    console.log(error);
  }
};

export const fetchCatByBreed = async breedId => {
  try {
    const response = await fetch(
      `${BASE_URL}/images/search?breed_ids=${breedId}`,
      requestOptions
    );

    const result = await response.json();

    if (!response.ok || !result.length) {
      throw new Error();
    }
    return result;
  } catch (error) {
    iziToast.error(errorNotificationOptions);
    console.log(error);
  }
};

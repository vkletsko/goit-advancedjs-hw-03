import { fetchBreeds, fetchCatByBreed } from './cats-api.js';
import { errorNotificationOptions } from './error-handler.js';
import SlimSelect from 'slim-select';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import 'slim-select/styles';

export const refs = {
  select: document.querySelector('select.breed-select'),
  cardWrapper: document.querySelector('.cat-info'),
  preloader: document.querySelector('.preloader'),
};

const createOptionsMarkup = data => {
  return data.reduce((markup, { name, id }) => {
    return (markup += `<option value="${id}">${name}</option>`);
  }, '<option data-placeholder="true"></option>');
};
const createCatMarkup = ({ breeds, url }) => {
  const [params] = breeds;
  return `
    <article class="cat-card">
      <div class="cat-card-content">
        <div class="cat-card-left">
          <div class="cat-card-img-container">
            <img
              class="cat-card-img"
              src="${url}"
              alt="${params.name}"
            />
          </div>
        </div>
        <div class="cat-card-right">
          <h2 class="cat-card-title">${params.name}</h2>
          <p class="cat-card-desc">${params.description}</p>
          <p class="cat-card-temp">
            <strong>Temperament:</strong>
            ${params.temperament}
          </p>
        </div>
      </div>
    </article>`;
};
const onSelectChange = async selectData => {
  try {
    refs.cardWrapper.innerHTML = '';
    const { value } = selectData[0];
    refs.preloader.style.display = 'block'; // Show preloader
    const response = await fetchCatByBreed(value);
    refs.preloader.style.display = 'none'; // Hide preloader
    if (!response) return;

    const catInfo = response[0];
    refs.cardWrapper.innerHTML = createCatMarkup(catInfo);
  } catch (error) {
    iziToast.error(errorNotificationOptions);
    console.log(error);
  }
};
const initBreeds = async () => {
  try {
    refs.preloader.style.display = 'block'; // Show preloader
    const breeds = await fetchBreeds();
    if (!breeds) {
      return;
    }

    refs.select.innerHTML = await createOptionsMarkup(breeds);
    new SlimSelect({
      select: 'select.breed-select',
      settings: {
        placeholderText: 'Select the cat breed',
        showSearch: false,
        maxValuesShown: 10, // Default 20
      },
      events: {
        afterChange: info => {
          onSelectChange(info);
        },
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    refs.preloader.style.display = 'none'; // Hide preloader
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initBreeds();
}, {"once":true});

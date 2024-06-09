import { fetchBreeds, fetchCatByBreed } from './cats-api.js';
import { showErrorMsg, errorNotificationOptions } from './error-handler.js';
import SlimSelect from 'slim-select';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import 'slim-select/styles';

export const refs = {
  select: document.querySelector('select.breed-select'),
  cardWrapper: document.querySelector('.cat-info'),
  errorMsg: document.querySelector('.error-msg'),
};

const createOptionsMarkup = data => {
  return data.reduce((markup, { name, id }) => {
    return (markup += `<option value="${id}">${name}</option>`);
  }, '<option data-placeholder="true"></option>');
};
const createCatMarkup = ({ breeds, url }) => {
  const [params] = breeds;
  return `<article class="cat-card">
    <div class="cat-card-left">
      <img
        class="cat-card-img"
        src="${url}"
        alt="${params.name}"
      />
    </div>
    <div class="cat-card-right">
      <h2 class="cat-card-title">${params.name}</h2>
      <p class="cat-card-desc">${params.description}</p>
      <p class="cat-card-tepm">
        <strong>Temperament:</strong>
        ${params.temperament}
      </p>
    </div>
  </article>`;
};
const onSelectChange = async selectData => {
  try {
    refs.cardWrapper.innerHTML = '';
    refs.errorMsg.innerHTML = '';
    const { value } = selectData[0];
    const response = await fetchCatByBreed(value);
    if (!response) return;
    const catInfo = response[0];
    refs.cardWrapper.innerHTML = createCatMarkup(catInfo);
  } catch (error) {
    iziToast.error(errorNotificationOptions);
    setTimeout(showErrorMsg, 1000);
    console.log(error);
  }
};
const initBreeds = async () => {
  const breeds = await fetchBreeds();
  if (!breeds) {
    refs.select.style.display = 'none';
    return;
  }

  refs.select.innerHTML = await createOptionsMarkup(breeds);
  new SlimSelect({
    select: 'select.breed-select',
    settings: {
      placeholderText: 'Select the cat breed',
    },
    events: {
      afterChange: info => {
        onSelectChange(info);
      },
    },
  });
};

document.addEventListener('DOMContentLoaded', initBreeds);
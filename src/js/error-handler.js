import { refs } from './index.js';

export const errorNotificationOptions = {
  title: '❌ ',
  message: `Oops! Something went wrong! Try reloading the page!`,
  backgroundColor: 'tomato',
  icon: '',
  messageColor: 'white',
  position: 'center',
  timeout: 900,
  close: false,
  animateInside: false,
  progressBar: false,
  transitionIn: 'bounceInUp',
};


export const showErrorMsg = () => {
  refs.errorMsg.innerHTML = `<div>
    <div class="frame">
      <iframe
        src="https://giphy.com/embed/xA88mlhRVZ3lm"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen=""
      ></iframe>
    </div>
    <p>Oops...</p>
  </div>`;
};

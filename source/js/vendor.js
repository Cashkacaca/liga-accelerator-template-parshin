// Swiper 7.4.1
// import './vendor/swiper';
import './vendor/focus-visible-polyfill';

// аккордеоен
import {initAccordions} from './vendor/init-accordion';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initAccordions();
  });
});

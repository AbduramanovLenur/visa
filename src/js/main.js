import imask from './modules/imask';
import events from './modules/event';
import card from './modules/card';
import cardImg from './modules/cardImg';

document.addEventListener('DOMContentLoaded', () => {
    imask('[data-js-number-input]', '0000 0000 0000 0000');
    imask('[data-js-cvv-input]', '0000');
    events('[data-js-number-input]', '[data-js-full-number]');
    events('[data-js-name-input]', '[data-js-name-text]');
    events('[data-js-month-select]', '[data-js-month-text]');
    events('[data-js-year-select]', '[data-js-year-text]');
    card();
    cardImg('[data-js-wrapper]');
});
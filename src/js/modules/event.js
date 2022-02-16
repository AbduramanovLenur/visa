const events = (inputSelector, textHolderSelector, focusSelector = '[data-js-focus-card]') => {
    const cardInput = document.querySelector(inputSelector);
    const cardText = document.querySelector(textHolderSelector);
    const cardFocus = document.querySelector(focusSelector);

    const returnFocusToInitial = () => {
        cardFocus.classList.remove('is-shown');
        cardFocus.style.transform = 'initial';
        cardFocus.style.width = '100%';
        cardFocus.style.height = '100%';
    }

    cardInput.addEventListener('focus', () => {
        cardFocus.classList.add('is-shown');
        cardFocus.style.transform = `translate(${cardText.offsetLeft}px, ${cardText.offsetTop}px)`;
        cardFocus.style.width = `${cardText.offsetWidth}px`;
        cardFocus.style.height = `${cardText.offsetHeight}px`;
    });

    cardInput.addEventListener('blur', () => {
        returnFocusToInitial();
    });
};

export default events;
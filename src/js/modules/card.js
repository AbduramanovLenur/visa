const card = () => {
    const parent = document.querySelector('.card');
    const cardNumbers = document.querySelectorAll('.card__number');
    const cardNumberInput = document.querySelector('[data-js-number-input]');
    const cardName = document.querySelector('[data-js-name-text]');
    const cardNameInput = document.querySelector('[data-js-name-input]');
    const cardMonthSelect = document.querySelector('[data-js-month-select]');
    const cardMonthText = document.querySelector('[data-js-month-text]');
    const cardYearSelect = document.querySelector('[data-js-year-select]');
    const cardYearText = document.querySelector('[data-js-year-text]');
    const cardCVVInput = document.querySelector('[data-js-cvv-input]');
    const cardCVVText = document.querySelector('[data-js-cvv-text]');

    cardNumberInput.addEventListener('input', cardNumberHandler);
    cardNameInput.addEventListener('input', cardNameHandler);
    cardMonthSelect.addEventListener('input', () => {
        cardSelectHandler(cardMonthSelect.value, cardMonthText, "MM");
    });
    cardYearSelect.addEventListener('input', () => {
        cardSelectHandler(cardYearSelect.value.slice(2, 4), cardYearText, 'YY');
    });
    cardCVVInput.addEventListener('input', cardCVVHandler);
    cardCVVInput.addEventListener('focus', () => {
        parent.classList.add('is-back-side-enabled');
    });
    cardCVVInput.addEventListener('blur', () => {
        parent.classList.remove('is-back-side-enabled');
    })

    function cardNumberHandler() {
        cardNumbers.forEach((cardNumber, index) => {
            if (cardNumber.classList.contains('card__number--separator')) return;

            const associatedChar = cardNumberInput.value[index];

            cardNumber.textContent = associatedChar ? associatedChar : '#';
        });
    };

    function cardNameHandler() {
        (cardNameInput.value === '') ? cardName.textContent = 'Full Name' : cardName.textContent = cardNameInput.value;
    };

    function cardSelectHandler(cardInput, cardText, text) {
        (cardInput === '') ? cardText.textContent = text : cardText.textContent = cardInput;
    };

    function cardCVVHandler() {
        cardCVVText.textContent = cardCVVInput.value;
    };
};

export default card;
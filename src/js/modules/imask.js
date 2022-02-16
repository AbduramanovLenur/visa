import IMask from 'imask';

const imask = (inputSelector, maskNumbers) => {
    const inputImask = document.querySelector(inputSelector);

    IMask(inputImask, {
        mask: maskNumbers
    });
};

export default imask;
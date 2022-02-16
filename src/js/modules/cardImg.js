const cardImg = (cardSrcImgSelector) => {
    const srcImg = document.querySelectorAll(cardSrcImgSelector);
    const imgs = ['bc-card-1.jpg', 'bc-card-2.jpg', 'bc-card-3.jpg', 'bc-card-4.jpg', 'bc-card-5.jpg', 'bc-card-6.jpg', 'bc-card-7.jpg', 'bc-card-8.jpg', 'bc-card-9.jpg', 'bc-card-10.jpg', 'bc-card-11.jpg'];
    const img = getRandomImg();

    srcImg.forEach(elem => {
        elem.style.backgroundImage = `url(assets/img/${img})`;
    });

    function getRandomImg() {
        return imgs[Math.floor(Math.random() * imgs.length)];
    }
};

export default cardImg;
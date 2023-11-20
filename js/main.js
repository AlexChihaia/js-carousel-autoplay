'use strict';


const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items')
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const thumbnails = document.querySelector('.thumbnails');


let currentItem = 0;

for (let i = 0; i < images.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item');

    if (i === currentItem) {
        item.classList.add('active');
    }

    const img = document.createElement('img');
    img.src = `img/${images[i]}`;
    img.alt = `Background${i}`;

    item.append(img);
    items.append(item);

    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.style.backgroundImage = `url(img/${images[i]})`;

    if (i === currentItem) {
        thumbnail.classList.add('active');
    }

    thumbnail.addEventListener('click', function () {
        clearInterval(autoplayInterval);
        items.querySelector('.active').classList.remove('active');
        thumbnails.querySelector('.active').classList.remove('active');
        item.classList.add('active');
        thumbnail.classList.add('active');
    });

    thumbnails.append(thumbnail);
}

const domItems = document.querySelectorAll('.item');

prev.addEventListener('click', function () {
    clearInterval(autoplayInterval);
    domItems[currentItem].classList.remove('active');
    thumbnails.querySelector('.active').classList.remove('active');
    if (currentItem > 0) {
        currentItem--;
    }
    else if (currentItem === 0) {
        currentItem = domItems.length - 1;
    }
    domItems[currentItem].classList.add('active');
    thumbnails.children[currentItem].classList.add('active');
});

next.addEventListener('click', function () {
    domItems[currentItem].classList.remove('active');
    thumbnails.querySelector('.active').classList.remove('active');
    if (currentItem < domItems.length - 1) {
        currentItem++;
    }
    else if (currentItem === domItems.length - 1) {
        currentItem = 0;
    }
    domItems[currentItem].classList.add('active');
    thumbnails.children[currentItem].classList.add('active');
});







const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');




let autoplay = true;
let autoplayInterval = setInterval;

function startAutoplay() {
    if (autoplay) {
        autoplayInterval = setInterval(function () {
            next.click();
        }, 3000);
    }
    else {
        clearInterval(autoplayInterval);
    }
}

startButton.addEventListener('click', function () {
    autoplay = true;
    startAutoplay();
});

stopButton.addEventListener('click', function () {
    autoplay = false;
    clearInterval(autoplayInterval);
});

startAutoplay();






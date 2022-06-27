'use sctrict';

let slider = document.querySelector('.slider');
let sliderItems = document.querySelector('.slider__items');
let sliderPagination = document.querySelector('.slider__pagination');
let sliderItemTemplate = document.querySelector(
  '#slider-item-template'
).content;
let sliderElement = sliderItemTemplate.querySelector('li');

let cards = [
  './images/Bitmap.svg',
  './images/Bitmap-1.svg',
  './images/Bitmap-2.svg',
  './images/Bitmap-3.svg',
  './images/Bitmap-4.svg',
  './images/Bitmap-5.svg',
  './images/Bitmap-6.svg',
  './images/Bitmap.svg',
  './images/Bitmap-1.svg',
  './images/Bitmap-2.svg',
  './images/Bitmap-3.svg',
];

for (let i = 0; i < cards.length; i++) {
  let clonedElement = sliderElement.cloneNode(true);
  let firstChildElement = clonedElement.children[0];
  firstChildElement.children[0].src = cards[i];
  sliderItems.appendChild(clonedElement);
}

let sliderItem = document.querySelectorAll('.slider__item');

let activateSwiper = function () {
  let addClassSwiper = function () {
    slider.classList.add('swiper');
    sliderItems.classList.add('swiper-wrapper');
    sliderPagination.classList.add('swiper-pagination');
  };

  let addClassSwiperItem = function () {
    for (let i = 0; i < sliderItem.length; i++) {
      sliderItem[i].classList.add('swiper-slide');
    }
  };

  const enableSwiper = function () {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 16,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
      slidesPerView: 'auto',
      grabCursor: true,

      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  addClassSwiper();
  addClassSwiperItem();
  enableSwiper();
};

let disactivateSwiper = function () {
  let removeClassSwiper = function () {
    slider.classList.remove('swiper');
    sliderItems.classList.remove('swiper-wrapper');
    sliderPagination.classList.remove('swiper-pagination');
  };

  let removeClassSwiperItem = function () {
    for (let i = 0; i < sliderItem.length; i++) {
      sliderItem[i].classList.remove('swiper-slide');
    }
  };

  removeClassSwiperItem();
  removeClassSwiper();
  swiper.destroy(true, true);
};

const breakpoint = window.matchMedia('(min-width: 768px)');
let swiper;
const breakpointChecker = function () {
  if (breakpoint.matches) {
    if (swiper !== undefined) {
      disactivateSwiper();
    }
    return;
  } else if (!breakpoint.matches) {
    activateSwiper();
    return;
  }
};

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();

let collapseButton = document.querySelector('.collapse-button');
let collapseButteonTitle = document.querySelector('.collapse-button__title');
let collapseButtonImg = document.querySelector('.collapse-button__img');

collapseButton.addEventListener('click', function () {
  sliderItems.classList.toggle('slider__items--visible');
  collapseButtonImg.classList.toggle('collapse-button__img--activated');

  let changeButtonText = function () {
    collapseButteonTitle.textContent === 'Показать все'
      ? (collapseButteonTitle.textContent = 'Скрыть')
      : (collapseButteonTitle.textContent = 'Показать все');
  };

  changeButtonText();
});

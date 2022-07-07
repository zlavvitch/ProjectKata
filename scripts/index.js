'use sctrict';

const cards = document.querySelector('.cards');
const cardsItems = cards.querySelector('.cards__items');
const catalog = document.querySelector('.catalog');
const collapseButton = catalog.querySelector('.collapse-button');
const collapseButteonTitle = catalog.querySelector('.collapse-button__title');
const collapseButtonImg = catalog.querySelector('.collapse-button__img');

let swiper;

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
  return swiper;
};

const breakpoint = window.matchMedia('(max-width: 767px)');
const breakpointChecker = function () {
  if (breakpoint.matches) {
    enableSwiper();
    return;
  }

  if (!breakpoint.matches && swiper !== undefined) {
    swiper.destroy(true, true);
  }
};

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();

collapseButton.addEventListener('click', function () {
  cardsItems.classList.toggle('cards__items--visible');
  collapseButtonImg.classList.toggle('collapse-button__img--activated');
  // collapseButteonTitle.toggle('collapse-button__title--activated');

  let changeButtonText = function () {
    collapseButteonTitle.textContent === 'Показать все'
      ? (collapseButteonTitle.textContent = 'Скрыть')
      : (collapseButteonTitle.textContent = 'Показать все');
  };

  changeButtonText();
});

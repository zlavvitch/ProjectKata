'use sctrict';

const slider = document.querySelector('.slider');
const sliderItems = slider.querySelector('.slider__items');
// const sliderItem = slider.querySelectorAll('.slider__item');
// const sliderPagination = slider.querySelector('.slider__pagination');
const collapseButton = slider.querySelector('.collapse-button');
const collapseButteonTitle = slider.querySelector('.collapse-button__title');
const collapseButtonImg = slider.querySelector('.collapse-button__img');
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
  sliderItems.classList.toggle('slider__items--visible');
  collapseButtonImg.classList.toggle('collapse-button__img--activated');

  let changeButtonText = function () {
    collapseButteonTitle.textContent === 'Показать все'
      ? (collapseButteonTitle.textContent = 'Скрыть')
      : (collapseButteonTitle.textContent = 'Показать все');
  };

  changeButtonText();
});

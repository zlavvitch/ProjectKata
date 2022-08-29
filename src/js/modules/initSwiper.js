'use strict';

import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

const breakpoint = window.matchMedia('(max-width: 767px)');
let init = false;
let swiper;

export function swiperMode() {
  if (breakpoint.matches) {
    if (!init) {
      init = true;
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
          clickable: true,
        },
      });
    }
  }

  if (!breakpoint.matches && init) {
    init = false;
    for (let i = 0; i < swiper.length; i++) {
      swiper[i].destroy(true, true);
    }
  }
}

breakpoint.addEventListener('change', swiperMode);

'use strict';

import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'
SwiperCore.use([Navigation, Pagination])

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

export const breakpoint = window.matchMedia('(max-width: 767px)');

export const breakpointChecker = function () {
  if (breakpoint.matches) {
    enableSwiper();
    return;
  }
  if (!breakpoint.matches && swiper !== undefined) {
    swiper.destroy(true, true);
  }
};

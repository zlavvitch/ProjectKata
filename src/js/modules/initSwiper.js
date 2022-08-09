'use strict'

import Swiper, { Pagination } from 'swiper'
Swiper.use([Pagination])

export let swiper
export const initSwiper = function () {
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
      clickable: true
    }
  })
  return swiper
}

export const breakpoint = window.matchMedia('(max-width: 767px)')
export function breakpointChecker() {
  if (breakpoint.matches) {
    initSwiper()
    return
  }

  if (!breakpoint.matches && swiper !== undefined) {
    for (let i = 0; i < swiper.length; i++) {
      swiper[i].destroy(true, true)
    }
  }
}

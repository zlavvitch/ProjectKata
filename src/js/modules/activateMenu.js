'use strict';

export function activateMenu() {
  const page = document.querySelector('.page');
  const header = document.querySelector('.header');
  const openMenuBtn = header.querySelector('.btn-menu');
  const menu = document.querySelector('.menu');
  const menuBody = menu.querySelector('.menu__body');

  openMenuBtn.addEventListener('click', function () {
    menu.classList.add('menu--opened');
    menuBody.classList.add('menu__body--opened');
    page.classList.add('page--noscroll');
  });

  menu.addEventListener('click', function (e) {
    const btnClose = e.target;

    if (
      !e.target.closest('.menu__body') ||
      btnClose.classList.contains('btn-close__img') ||
      btnClose.classList.contains('btn-call__img') ||
      btnClose.classList.contains('btn-chat__img')
    ) {
      menu.classList.remove('menu--opened');
      menuBody.classList.remove('menu__body--opened');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      menu.classList.remove('menu--opened');
      menuBody.classList.remove('menu__body--opened');
      page.classList.remove('page--noscroll');
    }
  });
}

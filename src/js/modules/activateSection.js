'use strict';

export function activateSection() {
  const sections = document.querySelectorAll('.section');

  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];

    section.addEventListener('click', function (e) {
      const article = this.querySelector('.article');
      const catalog = this.querySelector('.catalog');
      const btn = e.target;

      if (btn.classList.contains('section__title')) {
        const sectionBtnImg = this.querySelector('.section__img');
        sectionBtnImg.classList.toggle('section__img--activated');

        const sectionsBtnTitles = this.querySelectorAll('.section__title');
        for (let i = 0; i < sectionsBtnTitles.length; i++) {
          sectionsBtnTitles[i].classList.toggle('section__title--activated');
        }

        if (article) {
          const articleText = article.querySelector('.article__text');
          articleText.classList.toggle('article__text--visible');
        }

        if (catalog) {
          const catalogItems = catalog.querySelector('.catalog__items');
          catalogItems.classList.toggle('catalog__items--visible');
        }
      }
    });
  }
}

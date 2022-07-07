'use sctrict';

const collapseButton = document.querySelector('.collapse-button');
const collapseButteonTitle = collapseButton.querySelector(
  '.collapse-button__title'
);
const collapseButtonImg = collapseButton.querySelector('.collapse-button__img');
const articleText = document.querySelector('.article__text');

collapseButton.addEventListener('click', function () {
  articleText.classList.toggle('article__text--visible');
  collapseButtonImg.classList.toggle('collapse-button__img--activated');

  let changeButtonText = function () {
    collapseButteonTitle.textContent === 'Читать далее'
      ? (collapseButteonTitle.textContent = 'Скрыть')
      : (collapseButteonTitle.textContent = 'Читать далее');
  };

  changeButtonText();

});

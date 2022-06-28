'use sctrict';

let collapseButton = document.querySelector('.collapse-button');
let collapseButteonTitle = document.querySelector('.collapse-button__title');
let collapseButtonImg = document.querySelector('.collapse-button__img');
let articleText = document.querySelector('.article__text');

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

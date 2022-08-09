'use strict'

export function activateCollapseButton() {
  const collapseButtonImg = this.querySelector('.collapse-button__img')
  collapseButtonImg.classList.toggle('collapse-button__img--activated')

  const collapseButteonTitles = this.querySelectorAll('.button-title')
  for (let i = 0; i < collapseButteonTitles.length; i++) {
    collapseButteonTitles[i].classList.toggle(
      'collapse-button__title--activated'
    )
  }

  const collapseButtonList = this.classList

  if (collapseButtonList.contains('article__button')) {
    const catalogParent = this.parentElement
    const articleText = catalogParent.querySelector('.article__text')
    articleText.classList.toggle('article__text--visible')
  }

  if (collapseButtonList.contains('catalog__button')) {
    const catalogParent = this.parentElement
    const cardsItems = catalogParent.querySelector('.cards__items')
    cardsItems.classList.toggle('cards__items--visible')
  }
}


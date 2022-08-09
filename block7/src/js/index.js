'use strict'

import '../scss/style.scss'
import { activateCollapseButton } from './modules/activateCollapseButton'
import { breakpoint, breakpointChecker } from './modules/initSwiper'

const collapseButtons = document.querySelectorAll('.collapse-button')
const header = document.querySelector('.header')
const menu = document.querySelector('.menu')
const menuBody = menu.querySelector('.menu__body')

const openMenuButton = header.querySelector('.nav__item')
const closeMenuButton = menu.querySelector('.nav__item')
const popups = document.querySelectorAll('.popup')
const popupFeedback = document.querySelector('.popup-feedback')
const popupFeedbackBody = popupFeedback.querySelector('.popup__body')

const popupCall = document.querySelector('.popup-call')
const popupCallBody = popupCall.querySelector('.popup__body')

const openTellButtons = document.querySelectorAll('.nav__tell')
const openChatButtons = document.querySelectorAll('.nav__chat')
const closeModuleButtons = document.querySelectorAll('.nav__close')

breakpoint.addEventListener('change', breakpointChecker)
breakpointChecker()

for (let i = 0; i < collapseButtons.length; i++) {
  const collapseButton = collapseButtons[i]
  collapseButton.addEventListener('click', activateCollapseButton)
}

openMenuButton.addEventListener('click', function () {
  menu.classList.add('menu--opened')
  menuBody.classList.add('menu__body--opened')
})

closeMenuButton.addEventListener('click', function () {
  menu.classList.remove('menu--opened')
  menuBody.classList.remove('menu__body--opened')
})

for (let i = 0; i < openTellButtons.length; i++) {
  const openTellButton = openTellButtons[i]
  openTellButton.addEventListener('click', function () {
    popupFeedback.classList.add('popup--opened')
    popupFeedbackBody.classList.add('popup__body--opened')
  })
}

for (let i = 0; i < openChatButtons.length; i++) {
  const openChatButton = openChatButtons[i]
  openChatButton.addEventListener('click', function () {
    popupCall.classList.add('popup--opened')
    popupCallBody.classList.add('popup__body--opened')
  })
}

for (let i = 0; i < closeModuleButtons.length; i++) {
  const closeModuleButton = closeModuleButtons[i]
  closeModuleButton.addEventListener('click', function () {
    for (let i = 0; i < popups.length; i++) {
      const popup = popups[i]
      popup.classList.remove('popup--opened')

      if (popupFeedbackBody) {
        popupFeedbackBody.classList.remove('popup__body--opened')
      }

      if (popupCallBody) {
        popupCallBody.classList.remove('popup__body--opened')
      }
    }
  })
}

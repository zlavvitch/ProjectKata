'use strict'

import '../scss/style.scss'
import { activateCollapseButton } from './modules/activateCollapseButton'
import { breakpoint, breakpointChecker } from './modules/enableSwiper'



const collapseButtons = document.querySelectorAll('.collapse-button')
const header = document.querySelector('.header')
const menu = document.querySelector('.menu')
const openMenuButton = header.querySelector('.nav__item')
const closeMenuButton = menu.querySelector('.nav__item')

breakpoint.addEventListener('change', breakpointChecker)
breakpointChecker()

for (let i = 0; i < collapseButtons.length; i++) {
  const collapseButton = collapseButtons[i]
  collapseButton.addEventListener('click', activateCollapseButton)
}

openMenuButton.addEventListener('click', function () {
  menu.classList.remove('menu--hidden')
})

closeMenuButton.addEventListener('click', function () {
  menu.classList.add('menu--hidden')
})

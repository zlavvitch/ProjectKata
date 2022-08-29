'use strict';

export function activatePopup() {
  const page = document.querySelector('.page');
  const popups = document.querySelectorAll('.popup');
  const popupFeedback = document.querySelector('.popup-feedback');
  const popupFeedbackBody = popupFeedback.querySelector('.popup__body');
  const popupCall = document.querySelector('.popup-call');
  const popupCallBody = popupCall.querySelector('.popup__body');
  const openTellButtons = document.querySelectorAll('.btn-call');
  const openChatButtons = document.querySelectorAll('.btn-chat');

  for (let i = 0; i < openTellButtons.length; i++) {
    const openTellButton = openTellButtons[i];
    openTellButton.addEventListener('click', function () {
      popupCall.classList.add('popup--opened');
      popupCallBody.classList.add('popup__body--opened');
      const fisrtInput = popupCall.querySelector('.form__item');
      fisrtInput.focus();
      page.classList.add('page--noscroll');
    });
  }

  for (let i = 0; i < openChatButtons.length; i++) {
    const openChatButton = openChatButtons[i];
    openChatButton.addEventListener('click', function () {
      popupFeedback.classList.add('popup--opened');
      popupFeedbackBody.classList.add('popup__body--opened');
      page.classList.add('page--noscroll');
      const fisrtInput = popupFeedback.querySelector('.form__item');
      fisrtInput.focus();
    });
  }

  for (let i = 0; i < popups.length; i++) {
    const popup = popups[i];
    popup.addEventListener('click', function (e) {
      const btnClose = e.target;
      if (
        !e.target.closest('.popup__body') ||
        btnClose.classList.contains('btn-close__img')
      ) {
        popup.classList.remove('popup--opened');
        const popupBody = this.querySelector('.popup__body');
        popupBody.classList.remove('popup__body--opened');
        page.classList.remove('page--noscroll');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.code === 'Escape') {
        popup.classList.remove('popup--opened');
        page.classList.remove('page--noscroll');

        if (popupFeedbackBody) {
          popupFeedbackBody.classList.remove('popup__body--opened');
        }

        if (popupCallBody) {
          popupCallBody.classList.remove('popup__body--opened');
        }
      }
    });
  }
}

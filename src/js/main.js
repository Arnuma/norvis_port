'use strict'

import "./slider";

document.addEventListener('DOMContentLoaded', () => {

  const modalEngineer = document.querySelector('.popup_engineer'), //модалка вызова замерщика
    modalCloseBtn = document.querySelectorAll('.popup_close'), // кнопка закрытия модалки
    requestEngineerBtn = document.querySelector('.header_btn'), // кнопка вызова модалки "Вызов замерщика"
    modalCallback = document.querySelector('.popup'), // Модалка обратного звонка
    userCallbackBtn = document.querySelectorAll('.phone_link'),//Кнопка вызова модалки обратного звонка
    glazingPriceBtn = document.querySelectorAll('.glazing_price_btn '), //Кнопка открытия модалки рассчела стоимости
    modalCalc = document.querySelector('.popup_calc'), // модалка рассчета стоимости
    balconImg = document.querySelectorAll('.big_img img'), // картинки окон
    balconIconsImg = document.querySelectorAll('.balcon_icons_img'), // иконки окон
    modalCalcProfile = document.querySelector('.popup_calc_profile'), // модалка калькулятора остекления
    modalCalcEnd = document.querySelector('.popup_calc_end'), // модалка калькулятора - конец
    modalCalcNewBtn = document.querySelectorAll('.popup_calc_button'), // кнопка Далее у калькулятора
    glazingSliderTabs = document.querySelectorAll('.glazing_block'),
    glazingTabLinks = document.querySelectorAll('.glazing_block a'),
    glazingTree = document.querySelectorAll('.glazing_content'),
    decorationTabs = document.querySelectorAll('.internal_link'),
    decorationTabContent = document.querySelectorAll('.interior_tab');






  function openModal(selector) {
    selector.classList.add('show');
    document.body.style.overflow = 'hidden'
  }

  function closeModal(selector) {
    selector.classList.add('hide');
    selector.classList.remove('show');
    document.body.style.overflow = ''

  }

  //открытие модалки на "Заказать обратный звонок" и " Спросите у нашего специалиста!"

  userCallbackBtn.forEach(e => {
    e.addEventListener('click', () => {
      openModal(modalCallback);
    })
  })

  // закрытие на ESC 
  document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape' && modalEngineer.classList.contains('show')) {
      closeModal(modalEngineer)
    } else if (e.code == 'Escape' && modalCallback.classList.contains('show')) {
      closeModal(modalCallback);
      clearInterval(modalTimer);
    } else if (e.code == 'Escape' && modalCalc.classList.contains('show')) {
      closeModal(modalCalc)
    }

  })

  //открытие модалки на кнопку "Вызвать замерщика"

  requestEngineerBtn.addEventListener('click', () => {
    openModal(modalEngineer);
  });

  //закрытие на крестик модалок

  modalCloseBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('popup_callback_close')) {
        closeModal(modalCallback);
        clearInterval(modalTimer);
      } else if (btn.classList.contains('popup_engineer_close')) {
        closeModal(modalEngineer);
      } else if (btn.classList.contains('popup_calc_close')) {
        closeModal(modalCalc);
      }else if(btn.classList.contains('popup_calc_profile_close')) {
        closeModal(modalCalcProfile);
      } else {
        closeModal(modalCalcEnd);
      }
    })
  });

  //закрытие на подложку

  document.addEventListener('click', (e) => {
    if (e.target === modalEngineer) {
      closeModal(modalEngineer)
    } else if (e.target === modalCallback) {
      closeModal(modalCallback);
      clearInterval(modalTimer);
    } else if (e.target === modalCalc) {
      closeModal(modalCalc);
    }
  })

  //открытие модалки рассчета стоимости

  glazingPriceBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      openModal(modalCalc);
    })
  })

  //открытие модалки спустя 60 секунд

  const modalTimer = setInterval(() => {
    openModal(modalCallback);
  }, 20000);

  //открытие модалки рассчета стоимости

  function showFormOfBalconTab(i = 0) {
    balconIconsImg[i].classList.add('do_image_more');
    balconImg[i].style.display = 'block';
  }
  function hideFormOfBalconTab() {
    balconIconsImg.forEach(item => {
      item.classList.remove('do_image_more');
    })
    balconImg.forEach(item => {
      item.style.display = 'none'
    })
  }

  balconIconsImg.forEach((item, i) => {
    item.addEventListener('click', () => {
      hideFormOfBalconTab();
      showFormOfBalconTab(i);
    })
  })
  // открытие модалки на кнопку ДАЛЕЕ
  modalCalcNewBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(modalCalc);
      openModal(modalCalcProfile);
      if (btn.classList.contains('popup_calc_profile_button')) {
        closeModal(modalCalcProfile);
        openModal(modalCalcEnd);
      }
    })
  })
  // смена слайдера остекления


  function showGlazingTab(i = 0) {
    glazingTree[i].style.display = 'block';
    glazingTabLinks[i].classList.add('active')

  }

  function hideGlazingTab() {
    glazingTree.forEach(item => {
      item.style.display = 'none'
    })
    glazingTabLinks.forEach(item => {
      item.classList.remove('active')
    })
  }

  glazingSliderTabs.forEach((item, i) => {
    item.addEventListener('click', () => {
      hideGlazingTab();
      showGlazingTab(i);
    })
  })

  // слайдер отделки

  function showInterior(i = 0) {
    decorationTabContent[i].style.display = 'block';
    decorationTabs[i].classList.add('after_click');

  }

  function hideInterior() {
    decorationTabContent.forEach(item => {
      item.style.display = 'none'
    })
    decorationTabs.forEach(item => {
      item.classList.remove('after_click')
    })
  }

  decorationTabs.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      hideInterior();
      showInterior(i);
    })
  })

  const deadline = '2025-07-01';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`         // если число однозначное, то добавляется 0( 01, 02 и тд)
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);


    updateClock();


    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

  }




  //вызовы функций
  showFormOfBalconTab();
  hideGlazingTab();
  showGlazingTab(0);
  showInterior(0)
  getTimeRemaining(deadline);
  setClock('.container1', deadline);

})

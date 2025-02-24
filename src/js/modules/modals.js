const modals = () => {
  function bind(triggerSelector, modalSelector, closeSelector, closeClockOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]')

    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(item => {
          item.style.display = 'none';
        })

        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
      });
    })

    close.addEventListener('click', () => {
      windows.forEach(item => {
        item.style.display = 'none';
      })
      modal.style.display = 'none'
      document.body.style.overflow = ''
      clearTimeout(openModalTimer)
    })
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClockOverlay) {
        windows.forEach(item => {
          item.style.display = 'none';
        })
        modal.style.display = 'none'
        document.body.style.overflow = ''
        clearTimeout(openModalTimer)
      }
    })
    document.addEventListener('keydown', () => {
      modal.style.display = 'none'
      document.body.style.overflow = ''
    })
  }

  function openModalTimer(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden'
    }, time)
  }


  bind('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bind('.phone_link', '.popup', '.popup .popup_close');
  bind('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bind('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bind('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
  // openModalTimer('.popup', 60000);

};
export default modals
'use strict'

import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import images from "./modules/images";


window.addEventListener('DOMContentLoaded', () => {
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img img', 'do_image_more');
  timer('.container1', '2025-07-01');
  images();
})



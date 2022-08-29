'use strict';

import '../scss/style.scss';
import { swiperMode } from './modules/initSwiper';
import { activateSection } from './modules/activateSection';
import { activateMenu } from './modules/activateMenu';
import { activatePopup } from './modules/activatePopup';

swiperMode();
activateMenu();
activatePopup();
activateSection();

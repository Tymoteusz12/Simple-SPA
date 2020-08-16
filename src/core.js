import {showMenu} from './menu.js';
import { showSkills } from './secondPageOnScroll.js';
import * as pagesToggler from './pagesToggler.js';
//next page button
$('.next_page').on('click', pagesToggler.nextPage);

//menu managment
$('.arrow').on('click', showMenu);

//page activation according to button
$('.menu .fa-home').on('click', pagesToggler.returnToHome);
$('.menu .fa-brain').on('click', pagesToggler.toggleFirstPage);
$('.menu .fa-atom').on('click', pagesToggler.toggleSecondPage);
$('.menu .fa-user-alt').on('click', pagesToggler.toggleThirdPage);

//second page onScroll toggle
$(window).on('scroll', showSkills);
import {showMenu} from './menu.js';
import { showSkills } from './secondPageOnScroll.js';
import * as pagesToggler from './pagesToggler.js';
import * as infoToggler from './infoToggler.js';
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

//info sliders activation
$('.fa-user-tie').on('click', infoToggler.toggleUserTie);
$('.fa-github').on('click', infoToggler.toggleGithub);
//links sliders activation
$('#portfolio').on('click', infoToggler.slidePortfolioLink);
$('#github').on('click', infoToggler.slideGithubLink);
import {showMenu} from './menu.js';
import { showSkills } from './secondPageOnScroll.js';
import * as pagesToggler from './pagesToggler.js';
import * as infoToggler from './infoToggler.js';
import * as states from './states.js';
//next page button
$('.next_page').on('click', pagesToggler.nextPage);

//menu managment
$('.arrow i').on('click', showMenu);

//page activation according to button
$('.menu .homeBar').on('click', pagesToggler.returnToHome);
$('.menu .skillsBar').on('click', pagesToggler.toggleFirstPage);
$('.menu .passionsBar').on('click', pagesToggler.toggleSecondPage);
$('.menu .contactBar').on('click', pagesToggler.toggleThirdPage);

//second page onScroll toggle
const windowHeight = $(window).height();
$(window).on('scroll', () => showSkills(windowHeight, states.states));

//info sliders activation
$('.fa-user-tie').on('click', infoToggler.toggleUserTie);
$('.fa-github').on('click', infoToggler.toggleGithub);
//links sliders activation
$('#portfolio').on('click', infoToggler.slidePortfolioLink);
$('#github').on('click', infoToggler.slideGithubLink);
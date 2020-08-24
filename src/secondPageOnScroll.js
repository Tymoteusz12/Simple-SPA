import * as stateModule from './states';

export function showSkills(windowHeight){
    const scrollValue = $(document).scrollTop();
    if(stateModule.states.firstPageActive){
        if(scrollValue >  $('.python').offset().top - windowHeight/2){
            $('.cpp').addClass('active');
        }
        if(scrollValue > $('.js').offset().top - windowHeight/2){
            $('.python, .js').addClass('active');
        }
        if(scrollValue > $('.htmlcss').offset().top - windowHeight/2){
            $('.react, .htmlcss').addClass('active');
        }

        if(scrollValue > $('.git').offset().top - windowHeight/2){
            $('.git, .arch').addClass('active');
        }

        if(scrollValue > $('.arch').offset().top - windowHeight/1.5){
            $('.next_page').css('z-index', ('9'));
        }else{
            $('.next_page').css('z-index', ('-1'));
        }
    }
}


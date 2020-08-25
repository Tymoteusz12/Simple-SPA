export function showSkills(windowHeight, states){
    const scrollValue = $(document).scrollTop();
    if(states.firstPageActive){
        if(scrollValue >  $('.python').offset().top - windowHeight){
            $('.cpp').addClass('active');
        }
        if(scrollValue > $('.python').offset().top - windowHeight/2){
            $('.python').addClass('active');
        }
        if(scrollValue > $('.js').offset().top - windowHeight/1.5){
            $('.js').addClass('active');
        }
        if(scrollValue > $('.react').offset().top - windowHeight/1.5){
            $('.react').addClass('active');
        }
        if(scrollValue > $('.htmlcss').offset().top - windowHeight/1.5){
            $('.htmlcss').addClass('active');
        }

        if(scrollValue > $('.git').offset().top - windowHeight/1.5){
            $('.git').addClass('active');
        }

        if(scrollValue > $('.arch').offset().top - windowHeight/1.5){
            $('.arch').addClass('active');
            $('.next_page').css('z-index', ('9'));
        }else{
            $('.next_page').css('z-index', ('-1'));
        }
    }
}


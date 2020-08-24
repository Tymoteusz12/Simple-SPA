
export function showSkills(windowHeight){
    const scrollValue = $(document).scrollTop();
    if(scrollValue >  $('.python').offset().top - windowHeight/2){
        $('.crucial div:nth-child(3)').addClass('active');
    }
    if(scrollValue > $('.js').offset().top - windowHeight/2){
        $('.crucial div:nth-child(4), .crucial div:nth-child(5)').addClass('active');
    }
    if(scrollValue > $('.htmlcss').offset().top - windowHeight/2){
        $('.crucial div:nth-child(6), .crucial div:nth-child(7)').addClass('active');
    }

    if(scrollValue > $('.git').offset().top - windowHeight/2){
        $('.crucial div:nth-child(8)').addClass('active');
    }

    if(scrollValue > $('.arch').offset().top - windowHeight/1.5){
        $('.next_page').css('z-index', ('9'));
    }else{
        $('.next_page').css('z-index', ('-1'));
    }
}


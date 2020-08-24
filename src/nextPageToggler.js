
export function toggleButton(windowHeight, states){
    const scrollValue = $(document).scrollTop();
    if(scrollValue > windowHeight*0.05 && states.homePageActive){
        $('.next_page').css('z-index', ('9'));
    }
    else if(scrollValue >  windowHeight*0.1 && states.secondPageActive){
        $('.next_page').css('z-index', ('9'));
    }else if(scrollValue >  windowHeight*0.3 && states.thirdPageActive){
        $('.next_page').css('z-index', ('9'));
    }
    else if(!states.firstPageActive){
        $('.next_page').css('z-index', ('-1'));
    }

}
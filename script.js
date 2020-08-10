{
    let states = {
        firstPageActive: false,
        secondPageActive: false,
        thirdPageActive: false
    };

    function clearStates(){
        for(let key in states){
            states[key] = false;
        }
    }

    function clearFirstPage(){
        $('.crucial').removeClass('active');
        $('.com').removeClass('active');
        $('.border_mid').removeClass('active');
        $(document).scrollTop(0);
    }

    function clearSecondPage(){
        $('.passion').removeClass('active');
    }

    function clearThirdPage(){
        $('.info').removeClass('active');
    }

    function toggleFirstPage(){
        $('.crucial').addClass('active');
        $('.crucial div:nth-child(2)').addClass('active');
        $('.com').addClass('active');
        $('.border_mid').addClass('active');
        $('body').addClass('active');
        $('#weird').addClass('weird');
        $(document).scrollTop(0);
        clearSecondPage();
        clearThirdPage();
        states.firstPageActive = true;
    }
    
    function toggleSecondPage(){
        $('.passion').addClass('active'); 
        $(document).scrollTop(0);
        setTimeout( () => clearFirstPage(), 500);
        setTimeout( () => clearThirdPage(), 500);
        clearStates();
        states.secondPageActive = true;
    }

    function toggleThirdPage(){
        $('.info').addClass('active');
        clearFirstPage();
        clearSecondPage();
        clearStates();
        states.thirdPageActive = true;
    }

    function returnToHome(){
        clearFirstPage();
        if(states.secondPageActive){
            clearSecondPage();
        }
        else if(states.thirdPageActive){
            clearThirdPage();
        }
        $(document).scrollTop(0);
        clearStates();
    }

    function nextPage(){
        if(!states.firstPageActive && !states.secondPageActive && !states.thirdPageActive){
            toggleFirstPage();
        }
        else if(states.firstPageActive){   
            toggleSecondPage();
        }
        else if(states.secondPageActive){
            toggleThirdPage();
        }
        else{
            returnToHome();
        }
    }

    $('.next_page').on('click', nextPage);

    function showMenu(){
        $('.arrow').toggleClass('show');
        $('.menu').toggleClass('show');
        $('#weird').addClass('weird');
    }

    $('.arrow').on('click', showMenu);

    $('.menu .fa-home').on('click', returnToHome);
    $('.menu .fa-brain').on('click', toggleFirstPage);
    $('.menu .fa-atom').on('click', toggleSecondPage);
    $('.menu .fa-user-alt').on('click', toggleThirdPage);

    const windowHeight = $(window).height();
    function showSkills(){
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
            }
            else{
                $('.next_page').css('z-index', ('1'));
            }
        }

    $(window).on('scroll', showSkills);

}


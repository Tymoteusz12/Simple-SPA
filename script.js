{
    let states = {
        firstPageActive: false,
        secondPageActive: false,
        thirdPageActive: false
    };

    function toggleThirdPage(){
        states.thirdPageActive = true;
    }

    function toggleSecondPage(){
        $('.crucial').removeClass('active');
        states.secondPageActive = true;
    }

    function toggleFirstPage(){
        $('.crucial').addClass('active');
        $('.crucial div:nth-child(2)').addClass('active');
        $('.com').addClass('active');
        $('.border_mid').addClass('active');
        $('body').addClass('active');
        $('#weird').removeClass('weird');
        $(document).scrollTop(0);
        states.firstPageActive = true;
    }

    function nextPage(){
        if(!states.firstPageActive){
            toggleFirstPage();
        }
        else if(states.firstPageActive){   
            toggleSecondPage();
        }
        else if(states.secondPageActive){
            toggleThirdPage();
        }
    }

    function setupSecondPage(){
        $('.crucial').removeClass('active');
        console.log('pressed');
    }

    $('.next_page').on('click', nextPage);

    function showMenu(){
        $('.arrow').toggleClass('show');
        $('.menu').toggleClass('show');
        $('#weird').addClass('weird');
    }

    $('.arrow').on('click', showMenu);

    function clearStates(){
        for(let key in states){
            states[key] = false;
        }
    }

    function returnToHome(){
        clearStates();
        $('.crucial').removeClass('active');
        $('.crucial div:nth-child(2)').removeClass('active');
        $('.com').removeClass('active');
        $('.border_mid').removeClass('active');
        $('body').removeClass('active');
        $('#weird').addClass('weird');
        $(document).scrollTop(0);
    }

    const windowHeight = $(window).height();
    $('.menu .fa-home').on('click', returnToHome);

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
                $('.next_page').css('z-index', ('3'));
            }
            else{
                $('.next_page').css('z-index', ('1'));
            }
        }

    $(window).on('scroll', showSkills);

}


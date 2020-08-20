import * as statesModule from './states.js'

function clearFirstPage(){
    $('.crucial').removeClass('active');
    $('.crucial div:nth-child(2)').removeClass('active');
}

function clearSecondPage(){
    $('.passion').removeClass('active');
}

function clearThirdPage(){
    $('.info').removeClass('active');
    $('.info .portfolio_slider').removeClass('active');
    $('.info .github_slider').removeClass('active');
    $('.info .hover_effect1').removeClass('active');
    $('.info .hover_effect2').removeClass('active');
}

export function toggleHomePage(){
    $('.com').removeClass('active');
    $('.border_mid').removeClass('active');
    $('body').removeClass('active');
    $('#weird').removeClass('weird');
    $(document).scrollTop(0);
    statesModule.clearStates();
    statesModule.states.homePageActive = true;
}

export function toggleFirstPage(){
    $('.crucial').addClass('active');
    $('.crucial div:nth-child(2)').addClass('active');
    $('.com').addClass('active');
    $('.border_mid').addClass('active');
    $('body').addClass('active');
    $('#weird').addClass('weird');
    $(document).scrollTop(0);
    clearSecondPage();
    clearThirdPage();
    statesModule.clearStates();
    statesModule.states.firstPageActive = true;
}

export function toggleSecondPage(){
    $('.passion').addClass('active'); 
    $(document).scrollTop(0);
    setTimeout( () => clearFirstPage(), 500);
    setTimeout( () => clearThirdPage(), 500);
    clearThirdPage();
    statesModule.clearStates();
    statesModule.states.secondPageActive = true;
}

export function toggleThirdPage(){
    $('.info').addClass('active');
    clearFirstPage();
    clearSecondPage();
    statesModule.clearStates();
    statesModule.states.thirdPageActive = true;
}

export function returnToHome(){
    clearFirstPage();
    clearSecondPage();
    clearThirdPage();
    toggleHomePage();
    statesModule.clearStates();
    statesModule.states.homePageActive = true;
}

export function nextPage(){
    if(statesModule.states.homePageActive){
        toggleFirstPage();
    }
    else if(statesModule.states.firstPageActive){
        toggleSecondPage();
    }
    else if(statesModule.states.secondPageActive){
        toggleThirdPage();
    }
    else if(statesModule.states.thirdPageActive){
        returnToHome();
    }
}
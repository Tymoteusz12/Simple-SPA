    var bannerStatus = 1;
    var bannerStatusReverse;
    const bannerTimer = 3000;
    let active = false;
    let promise = false;
    let currentImg = 1;

    const imagesURL = {
        1: '../images/passions/astronomy.jpg',
        2: '../images/passions/cybersec.jpg',
        3: '../images/passions/math.jpg',
        4: '../images/passions/physics.jpg',
        5: '../images/passions/programing.jpg',
        6: '../images/passions/track.jpg',
        7: '../images/passions/weights.jpg',
    }
    window.onload = function(){
        bannerLoop();
    };

    function setBannerInterval(){
        return setInterval(() => (bannerLoop()), bannerTimer);
    }

    let startBannerLoop = setBannerInterval();

    function setImgOrder(firstID, secondID, thirdID){
        setTimeout(() => {
            document.getElementById('imgban'+firstID).style.right = "0px";
            document.getElementById('imgban'+firstID).style.zIndex = "10";
            document.getElementById('imgban'+secondID).style.right = "-100%";
            document.getElementById('imgban'+secondID).style.zIndex = "11";
            document.getElementById('imgban'+thirdID).style.right = "100%";
            document.getElementById('imgban'+thirdID).style.zIndex = "9";
        }, 200);
    }
    function setOpacity(opacity, ID){
        document.getElementById('imgban' + ID).style.opacity = opacity;
    }

    function setBannerStatus(forwardStatus, reverseStatus){
        bannerStatus = forwardStatus;
        bannerStatusReverse = reverseStatus;
    }

    function setProperImage(divID, imgID){
        $('#imgban' + divID).css('background-image', 'url(' + imagesURL[imgID] + ')' )
    }

    function findReverseBannerStatus(){

        if(bannerStatus === 2){
            bannerStatusReverse = 1;
        }
        else if(bannerStatus === 1){
            bannerStatusReverse = 2;
        }
        else{
            bannerStatusReverse = bannerStatus;
        }
    }

    function leftButtonHandler(){
        if(!active){
            if(!bannerStatusReverse){
                findReverseBannerStatus();
            }
            bannerLoopReverse();
        }
        active = true;
        if(!promise){
            promise = true;
            setTimeout(() => {
                promise = false;
                active = false;
            }, 500);        
        }
    }

    function rightButtonHandler(){
        if(!active){
            bannerLoop();
        }
        active = true;
        if(!promise){
            promise = true;
            setTimeout(() => {
                promise = false;
                active = false;
            }, 500);        
        }
    }

    document.getElementById('btn_left').onclick = function(){
        leftButtonHandler();
    };

    document.getElementById('btn_right').onclick = function(){
        rightButtonHandler();
    };

    document.getElementById('banner').onmouseenter = function(){
        clearInterval(startBannerLoop);
    };

    document.getElementById('banner').onmouseleave = function(){
        startBannerLoop = setBannerInterval();
    };

    function bannerLoop(){
        currentImg = currentImg+1;
        if(currentImg >= 8 ){
            currentImg = 1;
        }
        if(bannerStatus === 1){
            setProperImage("2", currentImg);
            setOpacity("0", "2");
            setImgOrder("1", "2", "3");   
            setTimeout(() => {
                setOpacity("1", "2");
            }, 400);
            setBannerStatus(2, 1);
        }
        else if(bannerStatus === 2){
            setProperImage("3", currentImg);
            setOpacity("0", "3");
            setImgOrder("2", "3", "1");
            setTimeout(() => { 
                setOpacity("1", "3");
            }, 400);
            setBannerStatus(3, 3);
        }
        else if(bannerStatus === 3){
            setProperImage("1", currentImg);
            setOpacity("0", "1");
            setImgOrder("3", "1", "2");
            setTimeout(() => {
                setOpacity("1", "1");
            }, 400);
            setBannerStatus(1, 2);
        }
    }

    function bannerLoopReverse(){
        currentImg -= 1;
        if(currentImg <= 0){
            currentImg = 7;
        }
        
        console.log(currentImg); 
        if(bannerStatusReverse === 1){
            setProperImage("2", currentImg); 
            setOpacity("0", "2");
            setImgOrder("3", "1", "2");
            setTimeout(() => {
                setOpacity("1", "2");
            }, 400);
            setBannerStatus(1, 2);                 
        }
        else if(bannerStatusReverse === 2){
            setProperImage("1", currentImg);
            setOpacity("0", "1");
            setImgOrder("2", "3", "1");
            setTimeout(() => {
                setOpacity("1", "1");
            }, 400);
            setBannerStatus(3, 3);  
        }
        else if(bannerStatusReverse === 3){
            setProperImage("3", currentImg); 
            setOpacity("0", "3");
            setImgOrder("1", "2", "3");
            setTimeout(() => {
                setOpacity("1", "3");
            }, 400);
            setBannerStatus(2, 1);           
        }  
        
    }
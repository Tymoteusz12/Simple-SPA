export let states = {
    homePageActive: true,
    firstPageActive: false,
    secondPageActive: false,
    thirdPageActive: false
};

export function clearStates(){
    for(let key in states){
        states[key] = false;
    }
}
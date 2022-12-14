
let rgb1 = 255;
let rgb2 = 255;
let rgb3 = 255;

let secondsRemaining = 15;
const bodyEl = document.getElementsByTagName('body')[0];

let countdownInterval = setInterval(function() {
    if(rgb1 > 0) {
        secondsRemaining --;
        rgb1--;
        rgb2--;
        rgb3--;
        //element.style.backgroundcolor = 
        bodyEl.style.backgroundColor = `rgb(${rgb1}, ${rgb2} , ${rgb3})`;
        console.log(rgb1);
    }
    else 
    {
        clearInterval(countdownInterval);
    }

}, 500);
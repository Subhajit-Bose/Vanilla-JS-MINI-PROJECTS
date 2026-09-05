const randomColour = function hexGenerator() {
    const arr = "0123456789ABCDEF"
    let str = '#';
    for (i = 1; i <= 6; i++) {
        str += arr[Math.floor(Math.random() * 16)]
    }
    return str
}

let intervaltime;
const startcolorchange = function () {
    if ( !intervaltime)
        intervaltime = setInterval( colorchanger , 1000)

    function colorchanger() {
        document.body.style.backgroundColor = randomColour();
    }
};

const stopcolorchange = function(){
    clearInterval(intervaltime);
    intervaltime = null;
}

document.querySelector('#start').addEventListener('click' , startcolorchange);
document.querySelector('#stop').addEventListener('click' , stopcolorchange);

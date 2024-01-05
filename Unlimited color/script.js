
function randomColor() {
    const hex = '123456789ABCDEF';
    let color = '#';
    for(let i = 0 ; i<6 ; i++){
    color += hex[Math.floor(Math.random()*16)];    
    }
    //console.log(color)
    return color ;
}

console.log(randomColor())

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const startChanging = function startChanging (){
    document.body.style.backgroundColor = randomColor(); 
}

let intervalId ; 

const startChangingColor = function (){
    //good practice 
    if( ! intervalId ){
        intervalId = setInterval( startChanging , 500);
    }
}

const stopChangingColor = function (){
    clearInterval(intervalId);
    intervalId = null ;
}

start.addEventListener('click' , startChangingColor)

stop.addEventListener('click' , stopChangingColor)



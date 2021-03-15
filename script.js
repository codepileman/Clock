setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function  setClock(){
    const now = new Date();
    const secondRatio = now.getSeconds() / 60;
    const minRatio = (secondRatio + now.getMinutes()) / 60;
    const hourRatio = (minRatio + now.getHours()) / 12;
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minRatio);
    setRotation(hourHand, hourRatio);

}

function setRotation(element, rotation){
    element.style.setProperty('--rotation', rotation * 360);
}

setClock();
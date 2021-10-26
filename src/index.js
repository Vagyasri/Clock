import './style.css';

const secondHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    secondHand.style.height = `3px`;

    const mins = now.getMinutes();
    const minDegrees = ((mins/60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    
    const hours = now.getHours();
    const hourDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    hourHand.style.height = `10px`;
}

setInterval(setTime,1000);
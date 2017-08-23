function $(param){
   return document.querySelector(param);
}

const secondHand = $(".second-hand");
const minuteHand = $(".min-hand");
const hourHand = $(".hour-hand");

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    const secondsDegrees = ((seconds / 60) * 360);
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hourDegrees = ((hours / 12) * 360) + 90;

    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
document.addEventListener('DOMContentLoaded', () => {
    const rightTimer = () => {
        let date = new Date();
        let secondHand = document.querySelector('.second');
        let hourHand = document.querySelector('.hour');
        let minuteHand = document.querySelector('.minute');
        let minute = date.getMinutes();
        let hour = date.getHours();
        let second = date.getSeconds();
        secondHand.style.transform =  `rotate(${second*6+90}deg)`;
        minuteHand.style.transform =  `rotate(${minute*6+90}deg)`;
        hourHand.style.transform =  `rotate(${hour*30+90+minute/2}deg)`;
    }
    setInterval(rightTimer, 1000);
});
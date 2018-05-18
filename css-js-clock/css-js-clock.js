document.addEventListener('DOMContentLoaded', () => {
    ////// Left Clock //////
    const secondHand = document.querySelector('.left-clock .second');
    const hourHand = document.querySelector('.left-clock .hour');
    const minuteHand = document.querySelector('.left-clock .minute');
    const leftTimer = () => {
        const date = new Date();

        const second = date.getSeconds();
        const secondDegree = (second * 6) + 90;
        // 360 degree for 60 seconds, 6 degree per second.
        secondHand.style.transform =  `rotate(${secondDegree}deg)`;

        const minute = date.getMinutes();
        const minuteDegree = (minute * 6) + 90 + (second / 10);
        // 360 degree for 60 seconds, 6 degree per minute. 
        // plus 6 degree for 60 seconds, 1 degree every 10 seconds.        
        minuteHand.style.transform =  `rotate(${minuteDegree}deg)`;
        
        const hour = date.getHours();
        const hourDegree = (hour * 30) + 90 + (minute / 2);
        // 360 degree for 12 hours, 30 degree per hour. 
        // plus 30 degree for 60 minute, 1 degree every 2 minutes.
        hourHand.style.transform =  `rotate(${hourDegree}deg)`;
    }
    setInterval(leftTimer, 1000);
    
    ////// Right Clock //////
    const secondHandLeft = document.querySelector('.right-clock .second-hand');
    const minuteHandLeft = document.querySelector('.right-clock .minute-hand'); 
    const hourHandLeft = document.querySelector('.right-clock .hour-hand'); 
    const rightTimer = () => {
        const now = new Date();

        const second = now.getSeconds();
        const secondDegree = (second / 60) * 360 + 90;
        secondHandLeft.style.transform = `rotate(${secondDegree}deg)`;
        
        const minute = now.getMinutes();
        const minuteDegree = (minute / 60) * 360 + 90;
        minuteHandLeft.style.transform = `rotate(${minuteDegree}deg)`;
        
        const hour = now.getHours();
        const hourDegree = (hour / 12) * 360 + 90;
        hourHandLeft.style.transform = `rotate(${hourDegree}deg)`;
    }
    setInterval(rightTimer, 1000);
    
});
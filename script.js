const daysEle=document.getElementById("days")
const hoursEle=document.getElementById("hours")
const minutesEle=document.getElementById("minutes")
const secondsEle=document.getElementById("seconds")

const countdownDate = new Date("June 6, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      daysEle.textContent  = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   console.log(days)
    hoursEle.textContent  = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutesEle.textContent= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      secondsEle.textContent = Math.floor((distance % (1000 * 60)) / 1000);
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
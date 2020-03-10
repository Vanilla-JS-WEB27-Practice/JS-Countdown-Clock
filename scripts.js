let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop the countdown
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display the countdown
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
    // console.log({ minutes, remainderSeconds });
};

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
}
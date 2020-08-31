const timeInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;
const timer = new Timer(timeInput, startButton, stopButton, {
    onStart(totalDuration) {
        duration = totalDuration
    },
    oncomplete() {
        console.log('Timer stopped');
    },
    onTick(remianingTime) {
        circle.setAttribute('stroke-dashoffset', 
            perimeter * remianingTime / duration - perimeter
        ); 
    }
});
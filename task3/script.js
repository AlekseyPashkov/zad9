const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('Yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}
function makeRed() {
    trafficLightEl.style.background = ('Red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen, makeYellow, makeRed);

/* Решение с тремя кругами */

const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');

let i = 2;

[trafficLightGreen, trafficLightYellow, trafficLightRed].forEach(function(element) {
	element.addEventListener("click", function() {
		i++;
		switch(i%3) {
		    case 0:
		        trafficLightGreen.style.background = ('Green');
		        trafficLightYellow.style.background = ('Black');
		        trafficLightRed.style.background = ('Black');
		        break;
		    case 1:
		        trafficLightYellow.style.background = ('Yellow');
		        trafficLightGreen.style.background = ('Black');
		        trafficLightRed.style.background = ('Black');
		        break;
		    case 2:
		        trafficLightRed.style.background = ('Red');
		        trafficLightGreen.style.background = ('Black');
		        trafficLightYellow.style.background = ('Black');
		        break;
		    default:
		        break;
		}
	});
});
var css = document.querySelector('h3');
var color_one = document.querySelector('.color_one');
var color_two = document.querySelector('.color_two');
var body = document.getElementById('gradient');
var randomButton = document.querySelector('.random');

/* gets the css for the element as an object */
// console.log(getComputedStyle(body));

/* when window is loaded, match the background with initial values of input */
window.addEventListener('load', setGradient);

function setGradient () {
	body.style.background = 
		"linear-gradient(to right, " /* syntax from w3schools gradient background css */
		+ color_one.value 
		+ ", " 
		+ color_two.value 
		+ ")";

		css.textContent = body.style.background + ';';
}

function getRandomInt(max) {
	/* Math.floor returns the largest integer less than or equal to a given number (if max is 30 it returns 30), Math.random() returns a decimal number between 0 and 1 */
	return Math.floor(Math.random() * Math.floor(max));
}

/* sets the color property of body to random nbrs */
function randomizeColor () {
	body.style.background =
		'linear-gradient(to right, rgb('
		+ getRandomInt(256) + ', ' + getRandomInt(256) + ', ' + getRandomInt(256) + '), rgb('
		+ getRandomInt(256) + ', ' + getRandomInt(256) + ', ' + getRandomInt(256) + '))';

	css.textContent = body.style.background + ';';
}

randomButton.addEventListener('click', randomizeColor);
color_one.addEventListener('input', setGradient);
color_two.addEventListener('input', setGradient);
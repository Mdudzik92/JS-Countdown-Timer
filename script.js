// Setting up variables to grab the HTML
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

// Setting up first function setTime() to count down seconds until photo appears.
function setTime() {
	// Setting setInterval function to decrement one second (1000 ms) at a time inside timerInterval variable.
	var timerInterval = setInterval(function () {
		secondsLeft--;
		// Adding the text to the h1 in the HTML via a JavaScript query selector.
		timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
	}, 1000);
}

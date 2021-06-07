// Setting up variables to grab the HTML
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

// Adding a specific number to start the countdown from.
var secondsLeft = 10;

// Setting up first function setTime() to count down seconds until photo appears.
function setTime() {
	// Setting setInterval function to decrement one second (1000 ms) at a time inside timerInterval variable.
	var timerInterval = setInterval(function () {
		secondsLeft--;
		// Adding the text to the h1 in the HTML via a JavaScript query selector.
		timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

		// Making an if statement telling this function what to do when the timer ends.
		if (secondsLeft === 0) {
			// When seconds reach 0, clear the timer and run the sendMessage function.
			clearInterval(timerInterval);
			sendMessage();
		}
	}, 1000);
}

// Setting up sendMessage function.
function sendMessage() {
	// When seconds reach 0 and sendMessage function runs, the countdown text clears.
	timeEl.textContent = " ";

	// Creating the new image element and putting it into a variable called imgEl.
	var imgEl = document.createElement("img");

	// Telling imgEl where to go for the picture to use, and appending it to the div with the id of "main" in the HTML.
	imgEl.setAttribute("src", "images/image_1.jpg");
	mainEl.appendChild(imgEl);
}

// Begin setTime function to start the whole process off.
setTime();

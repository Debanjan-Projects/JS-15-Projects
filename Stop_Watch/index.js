// Initialize time
let [seconds, minutes, hours] = [0, 0, 0];

// Get the display element
let displayTime = document.getElementById("displayTime");

// Timer variable
let timer = null;

// Function to update the stopwatch display every second
function stopwatch() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    // Format time with leading zeros
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // Update the display
    displayTime.innerHTML = `${h}:${m}:${s}`;
}

// Start button function
function watchStart() {
    if (!timer) { // Prevent multiple intervals
        timer = setInterval(stopwatch,1000); // 1 second interval
    }
}

// Stop button function
function watchStop() {
    clearInterval(timer);
    timer = null; // Allow start again
}

// Reset button function
function watchReset() {
    clearInterval(timer);
    timer = null;
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}

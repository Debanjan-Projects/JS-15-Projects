let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// ✅ Load song duration
song.onloadedmetadata = function () {
    progress.max = song.duration;  // use exact duration (float)
    progress.value = 0;
    updateProgressBar(0);
};

// ✅ Play / Pause
function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

// ✅ Update progress bar with music
song.ontimeupdate = function () {
    progress.value = song.currentTime; // keep float value
    updateProgressBar(progress.value);
};

// ✅ Seek
progress.oninput = function () {
    song.currentTime = progress.value;
    updateProgressBar(progress.value);
};

// ✅ Function: Update fill color
function updateProgressBar(value) {
    let percent = (value / progress.max) * 100;
    progress.style.background = `linear-gradient(to right, #1db954 ${percent}%, #444 ${percent}%)`;
}

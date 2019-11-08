let videoElem = document.getElementById("video-01");
let playButton = document.getElementById("btn-video-01");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
	try {
		await videoElem.play();
		playButton.className = "playing";
	} catch(err) {
		playButton.className = "";
	}
}

function handlePlayButton() {
	if (videoElem.paused) {
		playVideo();
	} else {
		videoElem.pause();
		playButton.className = "";
	}
}

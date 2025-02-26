document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.querySelector('.control-play');
    const musicPlayerContainer = document.querySelector('.music-player-container');
    const audio = document.getElementById('audio');

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            musicPlayerContainer.classList.add('is-playing');
        } else {
            audio.pause();
            musicPlayerContainer.classList.remove('is-playing');
        }
    });
});

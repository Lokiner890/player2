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

    // Добавление эффекта "лампового мерцания" при игре музыки
    setInterval(() => {
        if (musicPlayerContainer.classList.contains('is-playing')) {
            musicPlayerContainer.style.boxShadow = `5px 5px 20px rgba(0, 0, 0, ${Math.random() * 0.6 + 0.3})`;
        }
    }, 500);
});

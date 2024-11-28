// JavaScript to play sound when the banana is clicked
const banana = document.getElementById('banana');
const monkeySound = document.getElementById('monkeySound');

banana.addEventListener('click', () => {
    monkeySound.currentTime = 0; // Restart the sound
    monkeySound.play();
});
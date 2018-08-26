const video = document.querySelector('video');
const volumeSlider = document.getElementById('volume');
const speedSlider = document.getElementById('speed');
const timeButtons = document.querySelectorAll('button.move');
const playButton = document.querySelector('button.play');
const progress = document.querySelector('.progress');
const currentProgress = document.querySelector('.current_progress');
let play = false;
let mousedown = false;

volumeSlider.addEventListener('input', e => {
    video.volume = e.target.value;
});

speedSlider.addEventListener('input', e => {
    video.playbackRate = e.target.value;
});

const timeChangeHandle = e => {
    video.currentTime += parseFloat(e.currentTarget.dataset.second);
}
timeButtons.forEach(el => {
    el.addEventListener('click', timeChangeHandle);
});

playButton.addEventListener('click', e => {
    if(play) {
        video.pause();
        e.target.innerText = "▶";
    } else {    
        video.play()
        e.target.innerText = "❚❚";
    }
    play = !play;
});

const progressHandle = () => {
    const percent = (video.currentTime / video.duration) * 100;
    currentProgress.style.width = `${percent}%`;
}
const scrub = e => {
    const percent = (e.offsetX / progress.offsetWidth) * 100;
    currentProgress.style.width = `${percent}%`;
    video.currentTime = video.duration * (e.offsetX / progress.offsetWidth);

}
video.addEventListener('timeupdate', progressHandle);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => {
    if(mousedown) scrub(e);
});
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);



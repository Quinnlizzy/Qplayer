const playBtn = document.querySelector('#mainPlayBtn');
const audio = document.querySelector('#audio');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
const trackTitle = document.querySelector('.track-title');
const artistName = document.querySelector('.artist-name');
const cover = document.querySelector('.cover');
const slider = document.querySelector('.slider');
const thumb = document.querySelector('.slider-thumb');
const progress = document.querySelector('.progress');
const time = document.querySelector('.time');
const fullTime = document.querySelector('.fulltime');
const volumeSlider = document.querySelector('.volume-slider .slider');
const volumeProgress = document.querySelector('.volume-slider .progress');
const volumeIcon = document.querySelector('.volume-icon');

//global variables

//is the track playing
let trackPlaying = false;

//is the track muted
let volumeMuted = false;

//which track is currently loaded based on num id
let trackId = 0;

const tracks = [
    "Jerry Finn",
    "Great Park by Gaslight",
    "Scotty",
    "Arcades",
    "Interlusion",
    "Neon Stairwell"
];

//artist name

const artists = [
    "Pilch",
    "Pilch",
    "Pilch",
    "Pilch",
    "Pilch",
    "Pilch"
];

//track covers

const covers = [
    "Jerry Finn",
    "Great Park by Gaslight",
    "Scotty",
    "Arcades",
    "Interlusion",
    "Neon Stairwell"
];

//add a click event on the play button
playBtn.addEventListener('click', playTrack);

//play track function

function playTrack() {
    audio.src = `../assets/tracks/${tracks[trackId]}.m4a`;
    //if the track is playing
    if (trackPlaying === false) {
        //play audio
        audio.play();
        //add pause icon in button
        playBtn.innerHTML = `
    <i class="material-icons">
        pause
    </i>
`;
        //set the track playing to true becuase track now playing
        trackPlaying = true;
        //otherwise if it is playing
    } else {
        //pause the track
        audio.pause();
        //change the icon to pause
        playBtn.innerHTML = `
    <i class="material-icons">
        play_arrow
    </i>
`;
        //set the track playing to false becuase track now paused again
        trackPlaying = false;
    }
}

function switchTrack() {
    if(trackPlaying === true) {
        //leep audio playing
        audio.play();
    }
}

//get the track src
const trackSrc = 'assets/tracks/' + tracks[trackId] + '.m4a';

function loadTrack() {
    audio.src = 'assets/tracks/' + tracks[trackId] + '.m4a';
    audio.load();
    trackTitle.innerHTML = tracks[trackId];
    artistName.innerHTML = artists[trackId];
    cover.src = `assets/covers/${covers[trackId]}.jpg`;
    progress.computedStyleMap.width = 0;
    thumb.computedStyleMap.left = 0;

    audio.addEventListener('loadeddata', () => {
        setTimeout(fullTime, audio.duration);
        slider.setAttribute("max", audio.duration);
        setTime(fullTime, audio.duration);
});
}

loadTrack();

btnPrev.addEventListener('click', () => {
    trackId--;
    if(trackId < 0) {
        trackId = tracks.length - 1;
    }
    loadTrack();
    switchTrack();
});

btnNext.addEventListener('click', nextTrack);

function nextTrack() {
    trackId++;
    if(trackId > tracks.length -1) {
        trackId = 0;
    }
    loadTrack();
    switchTrack();
}

audio.addEventListener('ended', nextTrack);

function setTime(output, input) {
    const minutes = Math.floor(input / 60);
    const seconds = Math.floor(input % 60);
    if(seconds < 10) {
        output.innerHTML = minutes + ":0" + seconds;
    } else {
    output.innerHTML = minutes +":" + seconds;
}
}



audio.addEventListener('timeupdate', () => {
    const currentAudioTime = Math.floor(audio.currentTime);
    const timePercentage = (currentAudioTime / audio . duration) * 100 + "%";
    setTime(time, currentAudioTime);
    progress.style.width = timePercentage;
    thumb.style.left = timePercentage;
});

function customerSlider() {
    const val = (slider.value / audio.duration) * 100 + "%";
    progress.style.width = val;
    thumb.style.left = val;
    audio.currentTime = slider.value;
}

customerSlider();

slider.addEventListener('input', customerSlider);

let val;

function customVolumeSlider() {
    const maxVal = volumeSlider.getAttribute("max");
    val = (volumeSlider.value / maxVal) * 100 + "%";
    volumeProgress.style.width = val;
    audio.volume = volumeSlider.value / maxVal; // Change this line
    if(audio.volume > 0.5) {
        volumeIcon.innerHTML = `
        <span class="material-symbols-outlined">
            volume_up
        </span>
        `;
    } else if(audio.volume === 0) {
        volumeIcon.innerHTML = `
        <span class="material-symbols-outlined">
            volume_off
        </span>
        `;
    } else {
        volumeIcon.innerHTML = `
        <span class="material-symbols-outlined">
            volume_down
        </span>
        `;
    }
}

customVolumeSlider();

volumeSlider.addEventListener('input', customVolumeSlider);

volumeIcon.addEventListener('click', () => {
    if(volumeMuted === false) {
        volumeIcon.innerHTML = `
        <span class="material-symbols-outlined">
        volume_off
    </span>
    `;
        audio.volume = 0;
        volumeProgress.style.width = 0;
        volumeMuted = true;
    } else {
        volumeIcon.innerHTML = `
        <span class="material-symbols-outlined">
        volume_down
    </span>
    `;
    audio.volume = 0.5;
    volumeProgress.style.width = val;
    volumeMuted = false;
    }
}
);
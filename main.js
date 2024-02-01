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

//which track is currently loadrd based on num id
let trackId = 0;

const tracks = [
    "Jerry Finn",
    "Great Barr by Gaslight",
    "Scotty",
    "Arcades",
    "Interlusion",
    "Neon Stairwell"
];

//artist name

const artists = [
    "Pilch"
];

//covers

const covers = [
    "cover1",
    "cover2",
    "cover3",
    "cover4",
    "cover5",
    "cover6"
];

//add a click event on the play button
playBtn.addEventListener('click', playTrack);

//plat track func

function playTrack() {
    //if the track is playing
    if (trackPlaying === false) {
        //play audio
        audio.play();
        //add pause icon in button
        playBtn.innerHTML = `
        <span class="material-symbol-outlined">
            pause
        </span>
        `;
        //set the track playing to true becuase track now playing
        trackPlaying = true;
        //otherwise if it is playing
    } else {
        //pause the track
        audio.pause();
        //change the icon to pause
        playBtn.innerHTML = `
        <span class="material-symbol-outlined">
            play_arrow
        </span>
        `;
        //set the track playing to false becuase track now paused again
        trackPlaying = false;
    }
}

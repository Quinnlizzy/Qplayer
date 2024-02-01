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


let currentMusic = 0;
const music = document.querySelector('#audio');
const seekbar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const MusicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');

playBtn.addEventListener('click', () => {
    if (playBtn.className.includes('pause')) {
        music.play();
    } else {
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
});

const setMusic = (i) => {
    seekbar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`; // Fixed closing quote here

    currentTime.innerHTML = '00:00';
    seekbar.max=music.duration;

    setTimeout(() => {
        seekbar.max = music.duration;
        MusicDuration.innerHTML = formatTime(music.duration);
    }, 300);
};

setMusic(0);

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`; // Fixed the missing closing quote here
};

const playMusic=()=>{
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
}





setInterval(()=>{
  seekbar.value=music.currentTime;
  currentTime.innerHTML=formatTime(music.currentTime);
  if(Math.floor(music.currentTime)==Math.floor(seekbar.max)){
    forwardBtn.click();
  }
},500)


seekbar.addEventListener('change',()=>{
    music.currentTime=seekbar.value;
})


forwardBtn.addEventListener('click',()=>{
    if(currentMusic >=songs.length-1){
        currentMusic=0;
    }
    else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
})

backwardBtn.addEventListener('click',()=>{
    if(currentMusic <=0){
        currentMusic=songs.length-1;
    }
    else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
})


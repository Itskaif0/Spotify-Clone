console.log("Hello Welcome to Spotify");

//Initializing Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar')
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItem= Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Blue Eyes Yo Yo Honey Singh", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Brown Rang International Villager", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Kuley Kuley Honey 3.0", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kalaastar Honey 3 0", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "One Bottle Down Yo Yo H. Singh", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dheere Dheere Yo Yo Honey Singh", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Party All Night Boss ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Chaar Botal Vodka Ragini Mms 2", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Angreji Beat International Villager", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"}
]

songItem.forEach((ele,i)=>{
    ele.getElementsByTagName('img')[0].src = songs[i].coverPath;
    ele.getElementsByClassName('songName')[0].innerText = songs[i].songName

})

// audioElement.play();

// handel play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity= 1
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle')
        masterPlay.classList.remove('fa-pause-circle')
        gif.style.opacity= 0
    }
})
// Listens to events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressBar.value = progress 
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration/100)
})

const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity= 1
    })
})
document.getElementById('next').addEventListener('click', () =>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity= 1
})
document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')
    gif.style.opacity= 1
})


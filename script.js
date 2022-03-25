console.log("welcome to spostify");
//initialize the variable
let SongIndex=0;
let audioElement = new Audio('songs/1.mp3');
//audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {SongName:"let me love you",filePath:"Songs/1.mp3", coverPath:"Covers/1.jpg"},
    {SongName:"this is second song",filePath:"Songs/2.mp3", coverPath:"Covers/2.jpg"},
    {SongName:"this is 3rd song",filePath:"Songs/3.mp3", coverPath:"Covers/3.jpg"},
    {SongName:"this is 4th song",filePath:"Songs/4.mp3", coverPath:"Covers/4.jpg"},
    {SongName:"this is 5th song",filePath:"Songs/5.mp3", coverPath:"Covers/5.jpg"},
    {SongName:"this 6th song",filePath:"Songs/6.mp3", coverPath:"Covers/6.jpg"},
    {SongName:"this is 7th song",filePath:"Songs/7.mp3", coverPath:"Covers/7.jpg"},
    {SongName:"this is 8th song",filePath:"Songs/8.mp3", coverPath:"Covers/8.jpg"},
    {SongName:"this is  9th song",filePath:"Songs/9.mp3", coverPath:"Covers/9.jpg"},
    {SongName:"this is 10th songs",filePath:"Songs/10.mp3", coverPath:"Covers/10.jpg"},
    {SongName:"this is 11th song",filePath:"Songs/6.mp3", coverPath:"Covers/6.jpg"}
]
songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].SongName;
    
});
// handle play and pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        

    }
})
//Listen to event
audioElement.addEventListener('timeupdate',()=>{
    
    // Update seekBar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressBar.value*audioElement.duration)/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        SongIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        audioElement.src=`songs/${SongIndex}.mp3`;
        masterSongName.innerText=songs[SongIndex].SongName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(SongIndex>=10)
    {
        SongIndex=1;
    }else{
        SongIndex+=1;
    }
    audioElement.src=`songs/${SongIndex}.mp3`;
    masterSongName.innerText=songs[SongIndex].SongName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(SongIndex<=1)
    {
        SongIndex=1;
    }else{
        SongIndex-=1;
    }
    audioElement.src=`songs/${SongIndex}.mp3`;
    masterSongName.innerText=songs[SongIndex].SongName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})


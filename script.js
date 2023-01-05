console.log("welcome to spotify");

var songindex = 0;
var audioElement = new Audio("songs/1.mp3");
var masterplay = document.getElementById("masterplay");
var myprogressbar=document.getElementById("myprogressbar");
var mastersongname=document.getElementById("mastersongname");
var gif=document.getElementById("gif");
var songitems= Array.from(document.getElementsByClassName("songitem"));
var songs = [

    { songname: "salam-e-ishq", filepath: 'songs/1.mp3', coverpath: 'covers/1.jpg'},
    { songname: "ishq shawa", filepath: 'songs/2.mp3', coverpath: 'covers/2.jpg'},
    { songname: "yoyo", filepath: 'songs/3.mp3', coverpath: 'covers/3.jpg'},
    { songname: "teri ada", filepath: 'songs/4.mp3', coverpath: 'covers/4.jpg'},
    { songname: "fuck u", filepath: 'songs/5.mp3', coverpath: 'covers/5.jpg'},
    { songname: "saiyan", filepath: 'songs/6.mp3', coverpath: 'covers/6.jpg'},
    { songname: "dastaein", filepath: 'songs/7.mp3', coverpath: 'covers/7.jpg'},
    { songname: "mohobat", filepath: 'songs/8.mp3', coverpath: 'covers/8.jpg'},
    { songname: "jadu", filepath: 'songs/9.mp3', coverpath: 'covers/9.jpg'},
    { songname: "jawani", filepath: 'songs/10.mp3', coverpath: 'covers/10.jpg'},

]
songitems.forEach((element , i)=>{
    //console.log(element,i);
element.getElementsByTagName("img")[0].src= songs[i].coverpath;//coverpath to give image src
element.getElementsByClassName("songname")[0].innerText= songs[i].songname;
})
//AudioElement.play();
//handle play/pause click
masterplay.addEventListener('click', ()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");//<i class="fa-solid fa-pause"></i>
        //var playPromise = document.querySelector('video').play();
        gif.style.opacity = 1;//so that if we pause so this is not present dissapears
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity = 0;

    }
})
//listen to events
audioElement.addEventListener("timeupdate", ()=>{
    //console.log("timeupdate");//time updates in console
    //updateseekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)//gets the duration in percentage
    //console.log(progress);
        myprogressbar.value = progress;//this sets the progress
})
myprogressbar.addEventListener("change", ()=>
{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;//current time divided by duration multiply by hundred is percentage 
    // so to calculate current time we will do percenatge multiply by duration divided by hundred
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
    }

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
element.addEventListener("click",(e)=>{
    
console.log(e.target);//target se wo element mil jaega jispr click hua
makeAllPlays();

songindex= parseInt(e.target.id);//to get index
e.target.classList.remove("fa-play-circle");
e.target.classList.add("fa-pause-circle");
audioElement.src= `songs/${songindex}.mp3`;//these are not exclamation marks there are marks beside 1
mastersongname.innerText=songs[songindex].songname;

audioElement.currentTime= 0;
audioElement.play();
gif.style.opacity = 1;
masterplay.classList.remove("fa-play-circle");
masterplay.classList.add("fa-pause-circle");
})
})
document.getElementById("next").addEventListener("click",()=>{
    if(songindex>=9)
    {
        songindex=0;
    }
    else{
songindex+=1;
    }
audioElement.src= `songs/${songindex}.mp3`;//these are not exclamation marks there are marks beside 1
mastersongname.innerText=songs[songindex].songname;
audioElement.currentTime= 0;
audioElement.play();
masterplay.classList.remove("fa-play-circle");
masterplay.classList.add("fa-pause-circle");
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songindex<=0)
    {
        songindex=0;
    }
    else{
        songindex-=1;

    }
audioElement.src= `songs/${songindex}.mp3`;//these are not exclamation marks there are marks beside 1
mastersongname.innerText=songs[songindex].songname;

audioElement.currentTime= 0;
audioElement.play();
masterplay.classList.remove("fa-play-circle");
masterplay.classList.add("fa-pause-circle");
})
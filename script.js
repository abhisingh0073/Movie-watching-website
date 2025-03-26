let playButton = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myVideo = document.querySelector("#my-video");
let closebtn = document.querySelector(".close-video");
let barIcon = document.querySelector(".bar-icon")
let barBtn = false;

playButton.addEventListener("click", () => {
    video.style.display = "flex";
    myVideo.play();
    
})

closebtn.addEventListener("click", () => {
    video.style.display = "none";
    myVideo.pause();
})

function navbar(){
    barBtn = !barBtn;
    if(barBtn){
        barIcon.style.display="flex";
    }
    else{
        barIcon.style.display="none";

    }
    
}

// barIcon.addEventListener("click",() =>{
//     if(target.classList.contains("bar-nav-link")){
//     console.log("hello")
// }
// })
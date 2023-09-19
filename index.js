console.log("js => contected");

const cursor = document.querySelector('.cursor');
const socialNav = document.querySelector(".social-nav");
const btnSound = document.querySelector(".sound-btn");
const music = document.getElementById("audioPlayer");
// const music = new Audio('assets/gabriel-lebond-chill.mp3');
const btnEntrer = document.querySelector('.btn-enter');
const modal = document.querySelector('.modal-box');
const video = document.getElementById("background-video");






btnEntrer.addEventListener("click", () => {

  // console.log('btn enter-clicker');
  cursor.classList.remove("hide");
  modal.remove();
  video.setAttribute('autoplay','')
  music.play();
  music.loop = true;


})


// document.getElementById("myImg").src = "hackanm.gif";


// music.addEventListener("canplaythrough", (event) => {
//   /* the audio is now playable; play it if permissions allow */
//   console.log(music);

// });

document.body.addEventListener("mousemove", event => {

  const mouseX = event.clientX ;
  const mouseY = event.clientY ;

  cursor.style.transform = `translate(${mouseX - 25}px, ${mouseY - 25}px)`;

})

btnSound.addEventListener("click", () => {

  let cuurentSrc = btnSound.getAttribute("src");
  console.log(cuurentSrc);

  if (cuurentSrc === "assets/sound-on.svg"){
    music.pause();
    btnSound.setAttribute('src', 'assets/sound-off.svg');
  } else {
    music.play();
    btnSound.setAttribute('src', 'assets/sound-on.svg');
  };



})

// socialNav.addEventListener("mouseover", (event) => {
//   console.log('jgiertjgogrgre');
//   // cursor.style.transform = 'scale(3)';
//   const mouseX = event.clientX ;
//   const mouseY = event.clientY ;
//   cursor.style.width = "50px"
//   cursor.style.height = "50px"
//   // cursor.style.transform = `translate(${mouseX - 50 }px, ${mouseY }px)`;

// });

// socialNav.addEventListener("mousehover", event => {

//     // on met l'accent sur la cible de mouseenter
//     // event.target.style.color = "red";

//     console.log("au dessus")

//     cursor.style.width = "20px";
//     cursor.style.height = "20px";


//     // // on réinitialise la couleur après quelques instants
//     // setTimeout(function () {
//     //   cursor.style.width = "150px";
//     //   cursor.style.height = "150px";
//     // }, 500);



//   });

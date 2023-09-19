console.log("script.js => conected");

// PROGRESS BAR -------------------------------------- start

window.onscroll = function() {scrollAnimation()};

function scrollAnimation() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// PROGRESS BAR -------------------------------------- end



// BTN SHARE -------------------------------------- start
// const btnShare = document.getElementById('btnShare');

// // document.querySelector("#copy").addEventListener("click", copy);

// function copy() {
//   // let copyText = "https://gabriel-leblond.fr/";
//   navigator.clipboard.writeText("nutella");
// }

// btnShare.addEventListener('click', (e) => {
//   copy;
//   alert('adresse du site copié');
// })

// BTN SHARE -------------------------------------- end


// const mobileIconNav = document.querySelector(".mobile-nav-icon");
// const mobileModalNav = document.querySelector(".mobile-nav-modal");
// const mobileNavLikns = document.querySelectorAll(".mobile-nav-likns");
// console.info(mobileNavLikns);

// mobileIconNav.addEventListener("click", function () {
//   mobileIconNav.classList.toggle("fa-times");
//   mobileModalNav.classList.toggle("mobile-nav-modal-appear");
// });

// mobileNavLikns.forEach((i) => {
//   i.addEventListener("click", () => {
//     // console.log("Tu as clické sur le menu mobile");
//     mobileModalNav.classList.toggle("mobile-nav-modal-appear");
//   });
// });

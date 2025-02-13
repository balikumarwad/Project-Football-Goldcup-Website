// const hamburger = document.getElementById('hamburger');
// const navbar = document.getElementById('navbar');

// hamburger.addEventListener('click', () => {
//   // Toggle the open class on hamburger and navbar
//   hamburger.classList.toggle('open');
//   navbar.classList.toggle('open');

//   // Toggle visibility of icons
//   const barsIcon = hamburger.querySelector('.fa-bars');
//   const timesIcon = hamburger.querySelector('.fa-times');

//   if (navbar.classList.contains('open')) {
//     barsIcon.style.display = 'none';
//     timesIcon.style.display = 'inline';
//   } else {
//     barsIcon.style.display = 'inline';
//     timesIcon.style.display = 'none';
//   }
// });

function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  var hamburger = document.getElementById("hamburger");
  navbar.classList.toggle("open");
  hamburger.classList.toggle("open");

  // Toggle the hamburger to cross icon
  // if (navbar.classList.contains("responsive")) {
  //     icon.classList.remove("fa-bars");
  //     icon.classList.add("fa-times"); // Change to cross icon
  // } else {
  //     icon.classList.remove("fa-times");
  //     icon.classList.add("fa-bars"); // Change to hamburger icon
  // }
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((error) => console.log("Service Worker Registration Failed:", error));
}



const viewLiveScore = () => {
  window.location.href("./Pages/scores.html");
}
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  // Toggle the open class on hamburger and navbar
  hamburger.classList.toggle('open');
  navbar.classList.toggle('open');

  // Toggle visibility of icons
  const barsIcon = hamburger.querySelector('.fa-bars');
  const timesIcon = hamburger.querySelector('.fa-times');

  if (navbar.classList.contains('open')) {
    barsIcon.style.display = 'none';
    timesIcon.style.display = 'inline';
  } else {
    barsIcon.style.display = 'inline';
    timesIcon.style.display = 'none';
  }
});


import './index.html';
import './style.css';

console.log('funguju!');

const closeNav = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};

const hamburgerMenu = document.querySelector('#nav-btn');
hamburgerMenu.addEventListener('click', closeNav);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', closeNav);
});

let ordered = false;

const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
orderBtn.addEventListener('click', () => {
  if (ordered) {
    drinkCup.classList.remove('drink__cup--selected');
    orderBtn.textContent = 'Objednat';
    ordered = false;
  } else {
    drinkCup.classList.add('drink__cup--selected');
    orderBtn.textContent = 'Zrušit';
    ordered = true;
  }
});

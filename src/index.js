import './index.html';
import './style.css';
import { Layer } from './Layer';

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

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const drinkInfo = document.querySelector('.drink__info');
layers.forEach((layer) => {
  drinkInfo.innerHTML += Layer(layer);
});

import './index.html';
import './style.css';
import { Drink } from './Drink';

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

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
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
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

drinks.forEach((drink) => {
  document.querySelector('.drinks-list').appendChild(Drink(drink));
});

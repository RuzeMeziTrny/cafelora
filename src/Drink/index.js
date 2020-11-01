import './style.css';
import { Layer } from '../Layer';

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.className = 'drink';

  let drinkElmContent = `
    <div class="drink__product">
    <div class="drink__cup">
      <img src="/assets/cups/${props.id}.png" />
    </div>
    <div class="drink__info">
      <h3>${props.name}</h3>
      `;

  props.layers.forEach((layer) => {
    drinkElmContent += Layer(layer);
  });

  drinkElmContent += `
        </div>
      </div>
      <div class="drink__controls">
        <button class="order-btn">Objednat</button>
      </div>
    </div>
  `;

  drinkElm.innerHTML = drinkElmContent;

  const orderBtn = drinkElm.querySelector('.order-btn');
  const drinkCup = drinkElm.querySelector('.drink__cup');
  orderBtn.addEventListener('click', () => {
    if (props.ordered) {
      drinkCup.classList.remove('drink__cup--selected');
      orderBtn.textContent = 'Objednat';
      props.ordered = false;
    } else {
      drinkCup.classList.add('drink__cup--selected');
      orderBtn.textContent = 'Zrušit';
      props.ordered = true;
    }
  });

  return drinkElm;
};

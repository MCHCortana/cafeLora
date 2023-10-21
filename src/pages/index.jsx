import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Drink } from '../components/Drinks';

const response = await fetch('http://localhost:4000/api/drinks');
const data = await response.json();
const drinksJson = data.result;

console.log(drinksJson);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header zobrazit={true} />
    <main>
      <Banner />
      <Menu drinks={drinksJson} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);
// Header scroll fixed position
const headerElement = document.querySelector('header');
window.addEventListener('scroll', () => {
  headerElement.classList.add('sticky');
});

// Navigation hamburger on/off
const navigationElement = document.querySelector('.rollout-nav');
const menuButton = document.querySelector('.nav-btn');
menuButton.addEventListener('click', () => {
  navigationElement.classList.toggle('nav-closed');
});
navigationElement.addEventListener('click', () => {
  navigationElement.classList.toggle('nav-closed');
});

// Order buttons style change
const orderButtons = Array.from(document.querySelectorAll('.order-btn'));

orderButtons.map((button) => {
  if (button.textContent === 'Zrušit') {
    button.classList.add('order-btn--ordered');
  }
});
const processCoffeOrder = async (event) => {
  event.preventDefault();
  const buttonElementOrdering = event.target.querySelector('button');
  const drinkID = buttonElementOrdering.id;
  const drinkOrderedSatus = buttonElementOrdering.textContent;
  console.log(drinkID, drinkOrderedSatus);
  drinkOrderedSatus === 'Zrušit'
    ? await fetch(`http://localhost:4000/api/drinks/${drinkID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            op: 'replace',
            path: '/ordered',
            value: false,
          },
        ]),
      })
    : await fetch(`http://localhost:4000/api/drinks/${drinkID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          {
            op: 'replace',
            path: '/ordered',
            value: true,
          },
        ]),
      });
  window.location.reload();
};

const orderingCoffeForm = Array.from(document.querySelectorAll('form'));
console.log(orderingCoffeForm);

orderingCoffeForm.map((form) => {
  const coffeID = form.querySelector('input');
  form.addEventListener('submit', processCoffeOrder);
});

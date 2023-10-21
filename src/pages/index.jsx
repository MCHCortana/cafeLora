import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div id="home" className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);
const navigationElement = document.querySelector('.rollout-nav');
const menuButton = document.querySelector('.nav-btn');
menuButton.addEventListener('click', () => {
  navigationElement.classList.toggle('nav-closed');
});
navigationElement.addEventListener('click', () => {
  navigationElement.classList.toggle('nav-closed');
});

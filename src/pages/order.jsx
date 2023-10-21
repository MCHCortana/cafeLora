import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Order } from '../components/Order';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header zobrazit={false} />
    <main className="order">
      <div className="order__content container">
        <Order />
      </div>
    </main>

    <Footer />
  </div>,
);

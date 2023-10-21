import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Order } from '../components/Order';

const response = await fetch(
  'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
);
const data = await response.json();
const orderedDrinks = data.result;

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header zobrazit={false} />
    <main className="order">
      <div className="order__content container">
        <h1>Vaše objedávnka</h1>
        {orderedDrinks.length === 0 ? (
          <p className="empty-order">Zatím nemáte nic objednáno</p>
        ) : (
          <div className="order__items">
            {orderedDrinks.map((drink) => {
              return <Order key={drink.id} items={drink} />;
            })}
          </div>
        )}
      </div>
    </main>

    <Footer />
  </div>,
);

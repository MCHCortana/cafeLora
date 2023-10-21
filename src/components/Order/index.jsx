import './../../pages/index.css';
import './../../pages/order.css';
import { OrderItem } from './../OrderItem';

const response = await fetch(
  'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
);
const data = await response.json();
const orderedDrinks = data.result;

export const Order = () => {
  return (
    <>
      <h1>Vaše objedávnka</h1>
      {orderedDrinks.length === 0 ? (
        <p className="empty-order">Zatím nemáte nic objednáno</p>
      ) : (
        <div className="order__items">
          {orderedDrinks.map((drink) => {
            console.log(drink.image);
            return (
              <OrderItem key={drink.id} name={drink.name} image={drink.image} />
            );
          })}
        </div>
      )}
    </>
  );
};

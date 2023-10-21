import './../../pages/index.css';
import './../../pages/order.css';

export const OrderItem = (props) => {
  const { name, image } = props;
  console.log('name:', name, 'img', image);
  return (
    <div className="order-item">
      <img src={image} alt={name} className="order-item__image" />
      <div className="order-item__name">{name}</div>
    </div>
  );
};

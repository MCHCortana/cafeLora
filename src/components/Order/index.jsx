export const Order = ({ items }) => {
  return (
    <div className="order-item">
      <img src={items.image} alt={items.name} className="order-item__image" />
      <div className="order-item__name">{items.name}</div>
    </div>
  );
};

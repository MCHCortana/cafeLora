import './../../pages/index.css';
import { Layer } from '../Layer';

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;
  console.log('objednáno', ordered, name);
  const orderProcessText = () => {
    if (ordered) {
      return 'Zrušit';
    } else {
      return 'Objednat';
    }
  };
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} alt={name} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => {
            return <Layer key={id} color={layer.color} label={layer.label} />;
          })}
        </div>
      </div>
      <div className="drink__controls">
        <form>
          {/* <input type="hidden" value={id}></input> */}
          <button id={id} type="submit" className="order-btn">
            {orderProcessText()}
          </button>
        </form>
      </div>
    </div>
  );
};

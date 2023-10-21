import './../../pages/index.css';
export const Drink = () => {
  return (
    <Drink
      name="Romano"
      ordered={false}
      image="https://localhost:4000/assets/cups/romano.png"
      layers={[
        {
          color: '#fbdf5b',
          label: 'citrón',
        },
        {
          color: '#613916',
          label: 'espresso',
        },
      ]}
    />
  );
};

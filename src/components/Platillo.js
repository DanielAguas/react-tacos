import "../styles/menu.css";

const Platillo = (props) => {
  return (
    <div className="platillo">
      <h3><strong>{props.tipo}</strong></h3>
      <p><em>{props.descripcion}</em></p>
      <h3>Precio: <strong style = {{color: 'red' }}>${props.precio}</strong></h3>
    </div>
  );
}

export default Platillo;
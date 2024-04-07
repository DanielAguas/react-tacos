import "../styles/menu.css";

const Platillo = (props) => {
  return (
    <div className="platillo">
      <h3>{props.tipo}</h3>
      <p>{props.descripcion}</p>
      <h3>Precio: ${props.precio}</h3>
    </div>
  );
}

export default Platillo;
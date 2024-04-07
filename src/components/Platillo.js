import "../styles/menu.css";

const Platillo = (props) => {
  return (
    <div className="platillo">
      <h3>{props.tipo}</h3>
      <p>{props.descripcion}</p>
      <p>Precio: ${props.precio}</p>
    </div>
  );
}

export default Platillo;
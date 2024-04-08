import "../styles/menu.css";
import Card from "./Card";

const Platillo = (props) => {
  return (
    <Card className="platillo">
      <h2><strong>{props.tipo}</strong></h2>
      <p><em>{props.descripcion}</em></p>
      <h5>Precio c/u: <strong style = {{color: 'red' }}>${props.precio}</strong></h5>
    </Card>
  );
}

export default Platillo;
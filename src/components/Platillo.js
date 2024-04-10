import Card from "./Card";
import "../styles/menu.css";

export const Platillo = ({ id, 
  tipo, 
  descripcion, 
  precio, 
  allProducts, 
  setAllProducts, 
  onAddProduct,
  platillo
  
}) => {  
  
    const addingProduct = () => {
    console.log('Ejecutando addingProduct');
    const existingProduct = allProducts.find(item => item.id === id);
    console.log('ExistingProduct', existingProduct);
    if (existingProduct) {
      const updatedProducts = allProducts.map(item => 
        item.id === existingProduct.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, {...platillo, quantity: 1}]);
    }
  };

  console.log(allProducts);

  return (
    <Card className="platillo">
      <h2><strong>{tipo}</strong></h2>
      <p><em>{descripcion}</em></p>
      <h5>Precio c/u: <strong style={{ color: 'red' }}>${precio}</strong></h5>
      <button className="boton-carrito" onClick={addingProduct}>
        Añadir al Carrito
      </button>
    </Card>
  );
};

export default Platillo;
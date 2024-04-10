import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import "../styles/cart.css";

const Cart = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = platillo => {
    const results = allProducts.filter(
      item => item.descripcion !== platillo.descripcion
    );

    const platilloPrecio = parseFloat(platillo.precio);
    const platilloCantidad = parseFloat(platillo.quantity);
    setTotal(total - platilloPrecio * platilloCantidad);
    setCountProducts(countProducts - platilloCantidad);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header>
      <div className='container-icon'>
        <div
          className='container-cart-icon'
          onClick={() => setActive(!active)}
        >
          <FontAwesomeIcon icon={faBasketShopping}
            className='basket-icon'
         />
          <div className='count-products'>
            <span id='contador-productos'>{countProducts}</span>
          </div>
        </div>

        <div
          className={`container-cart-products ${
            active ? '' : 'hidden-cart'
          }`}
        >
          {allProducts.length ? (
            <>
              <div className='row-product'>
                {allProducts.map(platillo => (
                  <div className='cart-product' key={platillo.id}>
                    <div className='info-cart-product'>
                      <span className='cantidad-producto-carrito'>
                        {platillo.quantity}
                      </span>
                      <p className='titulo-producto-carrito'>
                        {platillo.tipo}
                      </p>
                      <span className='precio-producto-carrito'>
                        ${platillo.precio}
                      </span>
                    </div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='icon-close'
                      onClick={() => onDeleteProduct(platillo)}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <div className='cart-total'>
                <h3>Total: </h3>
                <span className='total-pagar'>${total}</span>
              </div>

              <button className='btn-clear-all' onClick={onCleanCart}>
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className='cart-empty'>El carrito está vacío</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Cart;
import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import ItemCart from "../cartItem";
function CartList({ carrito, btn}) {
  const {
    addToCart,
        restarCant,
        elimProd,
        elimCart,
        sumarTotal,
        actualizeContador,
        sendBuying,
  } = useCartContext();
  
  return (
    <>
      {carrito.length == 0 ? (
        <span className="d-flex justify-content-center text-light">
          No hay productos en el carrito!
        </span>
      ) : (
        <div>
          <ul className="d-flex flex-column">
            {carrito.map((prod, index) => (
              <ItemCart products={prod} key={prod.id} btn={`${btn}`} />
            ))}
          </ul>
          <div className="text-light">Precio final: ${sumarTotal}</div>
          
        </div>
      )}
    </>
  );
}
export default CartList;

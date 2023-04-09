import CartList from "../cartList";
import { PuffLoader } from "react-spinners";
import { useCartContext } from "../../context/CartContext";

function CartCont() {
  const {
    addToCart,
    elimProd,
    elimCart,
    carrito,
    contador,
    finishBuying,
    vaciarCart,
    sumarCant
  } = useCartContext();

  return (
    <main>
      <CartList carrito = {carrito} btn={`visible`}/>
    </main>
  );
}
export default CartCont;

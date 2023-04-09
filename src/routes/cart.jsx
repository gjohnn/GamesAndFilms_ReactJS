import { NavLink } from "react-router-dom";

import NavBar from "../components/NavBar"; 
import { CartContextProvider } from "../context/CartContext";
import { useCartContext } from "../context/CartContext";
import CartCont from "../components/cartCont";

export default function Cart() {
  const {
    addToCart,
    restarCant,
    elimProd,
    elimCart,
    carrito,
    sumarTotal,
    actualizeContador,
    sendBuying,
  } = useCartContext();
  
  return (
    <>
      <CartContextProvider>
        <NavBar />
        <div className="container">
          <CartCont ul={"color:white!important"}/>
        <NavLink to={`/checkout`}><button>Finalizar compra</button></NavLink>
        </div>
      </CartContextProvider>
    </>
  );
}


import CheckOutList from "../components/checkOutList";
import { useCartContext } from "../context/CartContext";
import NavBar from "../components/NavBar";

function CheckOut(btn) {
  const {carrito} = useCartContext();

  return (
    <>
    <NavBar />
    <CheckOutList carrito={carrito} btn={`${btn}`} />
    </>
  );
}
export default CheckOut;

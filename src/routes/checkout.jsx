
import CheckOutList from "../components/checkOutList";
import { useCartContext } from "../context/CartContext";
import NavBar from "../components/NavBar";
function CheckOut() {
  const {carrito} = useCartContext();

  return (
    <>
    <NavBar />
    <CheckOutList carrito={carrito} />
    </>
  );
}
export default CheckOut;

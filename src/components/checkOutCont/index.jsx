import { useCartContext } from "../../context/CartContext";

import CheckOutList from "../checkOutList";

export default function CheckOutCont() {
  const { carrito } = useCartContext();

  return (
    <main className="bg-gradient-to-b from-primario-200 to-primario-100 container-fluid pb-8 pt-16 lg:pt-32">
      {carrito.length != 0 ? (
        <CheckOutList carrito={carrito} />
      ) : (
        <PuffLoader
          color="#9c292d"
          className="mx-auto mt-28 mb-28"
          size={250}
        />
      )}
    </main>
  );
}

import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const datos = localStorage.getItem("carrito");
    return datos ? JSON.parse(datos) : [];
  });

  const db = getFirestore();

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const showNo = () => {
    Swal.fire("No hay stock", "", "error");
  };

  const addToCart = (prod, cantidad) => {
    if (cantidad == null) {
      cantidad = 1;
    }
    let detector = carrito.findIndex((elemento) => elemento.id === prod.id);

    if (detector !== -1) {
      if (carrito[detector].cantidad < carrito[detector].stock) {
        const actualizeCarrito = [...carrito];
        actualizeCarrito[detector].cantidad += cantidad;
        setCarrito(actualizeCarrito);
      }
    } else {
      const newProd = { cantidad, ...prod };
      setCarrito([...carrito, newProd]);
    }
  };

  const restarCant = (prod) => {
    let indice = carrito.findIndex((elemento) => elemento.id === prod.id);
    const nowCant = carrito[indice].cantidad;
    if (nowCant == 1) {
      const actualizarCarrito = carrito.filter((el) => el.id !== prod.id);
      setCarrito(actualizarCarrito);
    } else {
      const actualizarCarrito = [...carrito];
      actualizarCarrito[indice].cantidad -= 1;
      setCarrito(actualizarCarrito);
    }
  };

  const elimProd = (prod) => {
    const eliminarProd = carrito.filter((buscar) => buscar.id !== prod.id);
    return setCarrito(eliminarProd);
  };

  const elimCart = () => {
    setCarrito([]);
  };

  let actualizeContador = carrito.reduce(
    (acumulador, elemento) => acumulador + elemento.cantidad,
    0
  );

  let sumarTotal = carrito.reduce(
    (acum, el) => acum + el.precio * el.cantidad,
    0
  );
  function actualizeOrder(productID, stockFinal) {
    const item = doc(db, "items", productID);
    updateDoc(item, { stock: stockFinal });
  }

  function sendBuying(buyer) {
    const order = {
      buyer,
      items: carrito,
      total: sumarTotal,
    };

    const collectionRef = collection(db, "orders");

    addDoc(collectionRef, order)
      .then((res) => {
        const orderID = res.id;
        Swal.fire("Orden de compra: ",orderID);
        carrito.map((producto) => {
          const stockFinal = producto.stock - producto.cantidad;
          actualizeOrder(producto.id, stockFinal);
          elimCart();
        });
      })
      .catch((error) => console.log({ error }));
      elimCart();
  }

  console.log(carrito);

  return (
    <CartContext.Provider
      value={{
        addToCart,
        restarCant,
        elimProd,
        elimCart,
        carrito,
        sumarTotal,
        actualizeContador,
        sendBuying,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

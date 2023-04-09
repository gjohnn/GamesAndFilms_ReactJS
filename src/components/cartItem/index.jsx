import "./cartItem.css";
import { useCartContext } from "../../context/CartContext";
import {RotateLoader } from "react-spinners"

export default function ItemCart({ products, btn }) {
  const {
    id,
    nombre,
    category,
    genre,
    devs,
    descrip,
    image,
    precio,
    stock,
    subcat,
    cantidad
  } = products;

  const {
    addToCart,
        restarCant,
        elimProd,
        elimCart,
        carrito,
        contador,
        finishBuying,
  } = useCartContext();


  return (
    <div className="itemContent" key={id}>
      <div className="itemCartImg">
       {image == undefined ? <RotateLoader color="#ffffff" /> : <img src={image} alt={`img ${id}`} /> } 
      </div>
      <div className="itemContentText">
        <div>
          <div>{nombre}</div>
          <div>${precio}</div>
          <div>{`Cantidad: ${cantidad}`} </div>
        </div>
        <div className="buttonscart">
          <button onClick={()=> addToCart(products, 1)} className={`${btn} btn btn-success m-1`}>+</button>
          <button onClick={()=> restarCant(products)} className={`${btn} btn btn-danger m-1`}>-</button>
          <button onClick={ ()=> elimProd(products) } className={`${btn} btn btn-warning m-1`}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}

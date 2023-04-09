import "./cartItem.css";
import { useCartContext } from "../../context/CartContext";
import {RotateLoader } from "react-spinners"

export default function ItemCart({ products }) {
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
          <button onClick={()=> addToCart(products, 1)} className="btn btn-success">+</button>
          <button onClick={()=> restarCant(products)} className="btn btn-danger">-</button>
          <button onClick={ ()=> elimProd(products) } className="btn btn-warning">Eliminar</button>
        </div>
      </div>
    </div>
  );
}

import "./itemdetail.css";
import { useCartContext } from "../../context/CartContext";
import {RotateLoader } from "react-spinners"


function ItemDetail({ products }) {
  const {
    id,
    nombre,
    cat,
    genre,
    devs,
    descrip,
    image,
    precio,
    stock,
    subcat,
  } = products;


  const {addToCart} = useCartContext();
  return (
    <div key={id} className="contentitem container">
      <figure className="position-relative">
      {image == undefined ? <RotateLoader color="#ffffff"  className="loaderImg"/> : <img src={image} alt={`img ${id}`} /> } 
      </figure>
      <div className="text">
        <div className="itemnombre">{nombre}</div>
        <div className="itemdescrip">{descrip}</div>
        <div className="itemprecio">${precio}</div>
        <div>
        {stock == 0 || stock < 0 ? (
          <span className="text-danger">No hay stock</span>
        ) : stock >= 1 && stock <= 4 ? (
          <span className="text-warning">Quedan {stock}</span>
        ) : (
          <span className="text-success">Hay stock</span>
        )}
        </div>
        <button onClick={ ()=> addToCart(products) } type="submit" className="btn btn-success">Comprar</button>
      </div>
    </div>
  );
}

export default ItemDetail;

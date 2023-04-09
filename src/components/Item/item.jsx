import "./ifinal.css";
import { useCartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";


function Item({ products }) {
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
  } = products;
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
    <div className="contprod">
      <span className="subcatz">{subcat.toUpperCase()}</span>
      <NavLink to={`/item/${category}/${id}`} key={id}>
        <div className="contprodimg">
          <img src={image} alt={`img ${id}`} />
        </div>
      </NavLink>
      <div className="contprodtext">
        <span className="prodname">{nombre}</span>
        <span className="prodprice">${precio}</span>
        { stock == 0 || stock < 0 ? <span className="text-danger">No hay stock</span> : stock >= 1 && stock<=4 ? <span className="text-warning">Quedan {stock}</span> : <span className="text-success">Hay stock</span>}
      </div>
    </div>
  );
}

export default Item;

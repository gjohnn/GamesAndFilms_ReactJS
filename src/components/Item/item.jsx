import "./ifinal.css";
import { NavLink } from "react-router-dom";

function Item({ product }) {
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
  } = product;
  return (
    
      
    <div class="contprod">
      <span className="subcatz">{subcat.toUpperCase()}</span>
      <NavLink to={`/item/${category}/${id}`} key={id}>
      <div className="contprodimg">
        <img src={image} alt={`img ${id}`} />
      </div>
      </NavLink>
      <div className="contprodtext">
        <span className="prodname">{nombre}</span>
        <span className="prodprice">${precio}</span>
        <span className="btnbuy">
          <button className="btn btn-success">+</button>
        </span>
      </div>
    </div>
  );
}

export default Item;

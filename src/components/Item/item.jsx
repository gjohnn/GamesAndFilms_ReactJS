import "./ifinal.css";
import {NavLink} from "react-router-dom";

function Item({ product }) {
  const {id, nombre, cat, genre,devs, descrip,image,precio,stock,subcat} = product
  return (
    <NavLink to={`/item/${cat}/${id}`} key={id} >
    <div class="contprod">
      <div class="contprodimg">
        <img src={image} alt={`Img ${id}`} />
      </div>
      <div class="contprodtext">
        <div class="prodtext">
          <p class="contprodname">{nombre}</p>
          <p class="contprodprice">${precio}</p>
          <button type="button" class="btn btn-success btncom">
            +
          </button>
        </div>
      </div>
    </div>
    </NavLink>
  );
}

export default Item;

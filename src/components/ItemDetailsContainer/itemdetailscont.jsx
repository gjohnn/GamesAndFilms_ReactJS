import ItemDetail from "../ItemDetails/itemdetail";
import Products from "../../mocks/products";
import { useEffect, useState } from "react";
import "./itemdetailcont.css";
function ItemDetailCont(catID) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productsprom = new Promise((resolve, reject) =>
      resolve(Products)
    );
    productsprom
      .then((response) => {
          const filtered = response.filter(
            (product) => product.id == catID.catID
          );
          setProducts(filtered);
        }
        )
        .catch((err) => console.log(err));
    }, [catID]);
  return(
    <ItemDetail item={products[0]} />
    );
}

export default ItemDetailCont;

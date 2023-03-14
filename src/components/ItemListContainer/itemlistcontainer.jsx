import { useEffect, useState } from "react";
import Products from "../../mocks/products";
import ItemList from "../ItemList/itemlist";
function ItemListCont({catID, isCategoryRoute}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productsprom = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Products), 2000)
    );
    productsprom
      .then((response) =>{
        if (isCategoryRoute){
          const productsFiltered = response.filter(
            (product)=> product.cat === catID
          );
          setProducts(productsFiltered)
        }else{
          setProducts(response);
        }
      })
      .catch((err) => console.log(err));
  }, [catID]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListCont;

import ItemDetail from "../ItemDetails/itemdetail";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import "./itemdetailcont.css";
function ItemDetailCont({catID}) {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const db = getFirestore();
    const lol = doc(db, "items", catID)
    getDoc(lol).then((snapshot)=>{
      if (snapshot.exists()) {
          setProducts({id:snapshot.id, ...snapshot.data()})
      }
  }).catch((error)=>console.log(error))
  },[])

  return <ItemDetail products={products} />;
}

export default ItemDetailCont;

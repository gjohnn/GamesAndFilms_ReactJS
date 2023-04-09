import { useEffect, useState } from "react";
import {PacmanLoader} from "react-spinners"

import ItemList from "../ItemList/itemlist";
import {collection,or, doc, getDocs, getFirestore, query, where} from "firebase/firestore"
function ItemListCont({catID, isCategoryRoute}) {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const db = getFirestore();
    const CollectionItems = collection(db, "items");
    if (isCategoryRoute){
      const q = query(CollectionItems,or( where('category', '==' , catID), where('subcat', '==' , catID)));
      getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs;
        setProducts(docs.map((doc)=> ({id:doc.id, ...doc.data()})))
        
  
      })
      .catch((err)=> console.log(err))

    }else{
      getDocs(CollectionItems)
      .then((snapshot)=>{
          const docs = snapshot.docs
              setProducts(docs.map((doc)=>({id:doc.id, ...doc.data()} )))
      }).catch((error)=>console.log(error))
  }
    
  }, [catID]);

  return (
    <div className="container">
      { products.length!=0?<ItemList products={products}/>:
            <PacmanLoader className="mx-auto mt-5" color="#ffffff" size={100}/>}
    </div>
  );
}

export default ItemListCont;

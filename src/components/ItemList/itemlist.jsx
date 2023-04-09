import Item from "../Item/item";
import "./il.css"

function ItemList({ products }){
    return(
      <div>
        <ul>
            {products.map((products, index)=>(
            <Item products={ products } key={products.id}/>
            ))}
        </ul>
      </div>
    )
}

export default ItemList;
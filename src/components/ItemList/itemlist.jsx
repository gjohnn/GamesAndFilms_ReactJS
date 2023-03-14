import Item from "../Item/item";
import "./il.css"

function ItemList({ products }){
    return(
      <div>
        <ul>
            {products.map((product, index)=>(
            <Item product={ product } key={product.id}/>
            ))}
        </ul>
      </div>
    )
}

export default ItemList;
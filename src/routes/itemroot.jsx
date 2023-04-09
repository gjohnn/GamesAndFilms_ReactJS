import NavBar from "../components/NavBar";
import ItemDetailCont from "../components/ItemDetailsContainer/itemdetailscont";
import { useParams } from "react-router-dom";
function ItemRoot(){
    const params = useParams();
    
    return(
        <div>
            <NavBar />
            <ItemDetailCont catID={params.id} />
        </div>
    );
}

export default ItemRoot;
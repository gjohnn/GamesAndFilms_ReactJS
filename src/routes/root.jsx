
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import NavBar from "../components/NavBar";
import ItemListCont from "../components/ItemListContainer/itemlistcontainer";
import {useParams} from "react-router-dom";
import {CartContextProvider} from "../context/CartContext"


function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);
  return (

     <>
      <NavBar />
      <div className="container">
      <ItemListCont isCategoryRoute={isCategoryRoute} catID={params.id} />
     
     
      </div>
      
      </>
  );
}
//<Contador />

export default Root;

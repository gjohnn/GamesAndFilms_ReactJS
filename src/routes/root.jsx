
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import NavBar from "../components/NavBar";
import Contador from "../components/body/contador";
import ItemListCont from "../components/ItemListContainer/itemlistcontainer";
import Carouselindex from "../components/carousel/carousel";
import {useParams} from "react-router-dom";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);
  return (
    <>
      <NavBar />
      <Carouselindex />
      <ItemListCont isCategoryRoute={isCategoryRoute} catID={params.id} />
      <Contador />
    </>
  );
}

export default Root;

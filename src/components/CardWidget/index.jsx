import "./cardwidget.css"
import Cartimage from "../NavBar/shoppingcartlogo.png"
function CardWidget(){
    return(
        <div class="cardwidcont">
            <div className="contimg"><img src={Cartimage} class="imgcart"></img></div>
            
            <div class="text-light">3</div>
        </div>
    );

}

export default CardWidget;
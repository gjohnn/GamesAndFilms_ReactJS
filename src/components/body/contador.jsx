import { useState } from "react";
import "./contador.css";
function Contador(){
    const [a, setA] = useState(0);
    const date = new Date().toLocaleDateString();
    const hours = new Date().toLocaleTimeString();
    return(
    <>
    <button class="botonmedio" onClick={() => setA(a + 1)}>{a}</button>
    <p>
        Ultimo click el {date} a las {hours}
    </p>
    </>
            
    );
}
export default Contador;
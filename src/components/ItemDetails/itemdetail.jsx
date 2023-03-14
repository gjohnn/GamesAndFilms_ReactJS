import "./itemdetail.css"

function ItemDetail({item}){
    if (item == undefined){
        item = true
    }
    const {id, nombre, cat, genre,devs, descrip,image,precio,stock,subcat} = item;

    return (
        <div key={id} class="contentitem container">
            <figure><img src={`${image}`} alt={`Img: ${id}`} /></figure>
            <div className="text">
          <div className="itemnombre">{nombre}</div>
          <div className="itemdescrip">{descrip}</div>
          </div>
        </div>
      );
}

export default ItemDetail;
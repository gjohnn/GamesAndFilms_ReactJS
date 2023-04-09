import "./cardwidget.css";
import { useCartContext } from "../../context/CartContext";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillCartFill } from "react-icons/bs";
import CartCont from "../cartCont";
import { NavLink } from "react-router-dom";

function CartWidget() {
  const {
    addToCart,
    restarCant,
    elimProd,
    elimCart,
    carrito,
    sumarTotal,
    actualizeContador,
    sendBuying,
  } = useCartContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="cardwidcont">
      
      <Button className="btnshowcart position-relative " onClick={handleShow}>
        <BsFillCartFill className="iconBoots" />
        <div className="contadorCart">
        <div className="text-dark">
        {actualizeContador}
        </div>
      </div>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartCont />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={elimCart}>
            Vaciar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <NavLink to={"/cart"}>
            <Button variant="primary">Ver carrito</Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartWidget;

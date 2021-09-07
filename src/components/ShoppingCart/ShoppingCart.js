import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MdAttachMoney } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import {
  deleteFromCart,
  openCollapse,
  totalAcc,
} from "./../../redux/actions/cartAction";
import "./cart.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ShoppingCart({
  shoppingCart,
  deleteFromCart,
  totalAcc,
  total,
  openCollapse,
}) {
  useEffect(() => {
    totalAcc();
  }, [totalAcc, shoppingCart]);

  const renderPagar = (e) => {
    if (total === 0) {
      e.preventDefault();
      Swal.fire({
        text: "El carrito esta vacío, selecciona los tablets.",
        icon: "warning",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      openCollapse();
    }
  };

  return (
    <div id="example-collapse-text" className="Contenedor">
      {shoppingCart && shoppingCart.length
        ? shoppingCart.map((orden) => {
            return (
              <React.Fragment key={orden.id}>
                <div className="imagen">
                  <img
                    src={orden.imagen}
                    className="img-cart"
                    alt="Tablet Ordenado"
                  />
                </div>
                <div>
                  <p className="tabName" style={{ fontWeight: "bolder" }}>
                    {orden.principal}
                  </p>
                  <p className="tabQty" style={{ fontWeight: "bolder" }}>
                    Cantidad: <span>{orden.qty}</span>
                  </p>
                  <p className="tabTotal" style={{ fontWeight: "bolder" }}>
                    Subtotal: <span>{orden.qty * orden.precio}</span>
                    <MdAttachMoney />
                  </p>
                  <button
                    className="botonElim"
                    onClick={() => deleteFromCart(orden.id)}
                  >
                    <FaTrashAlt style={{ width: "20px", height: "20px" }} />
                  </button>
                </div>
              </React.Fragment>
            );
          })
        : ""}
      <div className="lineaizq"></div>
      <div className="lineader"></div>
      <div>
        <p className="total" style={{ fontWeight: "bolder" }}>
          Total a Pagar:
        </p>
      </div>
      <div>
        <p className="totalPrice" style={{ fontWeight: "bolder" }}>
          {total}
          <MdAttachMoney />
        </p>
        <Link
          className="btn btn-success botonPage"
          to="/pagar"
          onClick={(e) => renderPagar(e)}
        >
          Pagar
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.cartReducer.shoppingCart,
    total: state.cartReducer.total,
    open: state.cartReducer.open,
  };
};

export default connect(mapStateToProps, {
  deleteFromCart,
  totalAcc,
  openCollapse,
})(ShoppingCart);

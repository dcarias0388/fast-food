import React, { useState } from "react";
import { MdAttachMoney } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { connect } from "react-redux";
import "./tablets.css";

function TabletDetaills({ data, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    const value = e.target;
    setQuantity(value);
  };

  const resQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="card" style={{ maxHeight: "150vh" }}>
      <img src={data.imagen} className="card-img-top" alt="Menú Dirigido" />
      <div className="card-body">
        <p className="card-text">{data.entrante}</p>
        <p className="card-text platprinc">{data.principal}</p>
        <p className="card-text">{data.postre}</p>
        <p className="card-text">{data.liquido}</p>
        <p className="Precio">
          {data.precio} <MdAttachMoney />{" "}
        </p>
        <div className="btn-grouper">
          <div className="text-center">
            <button
              className="btn btn-warning"
              type="button"
              onClick={resQuantity}
            >
              -
            </button>
            <input
              type="text"
              className="Quantity"
              value={quantity}
              onChange={handleChange}
            />
            <button
              className="btn btn-warning strong"
              type="button"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="btn btn-dark mt-3"
              type="button"
              onClick={() => {
                addToCart(data, quantity);
                setQuantity(0);
              }}
            >
              <MdAddShoppingCart /> Agregar Orden
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(TabletDetaills);

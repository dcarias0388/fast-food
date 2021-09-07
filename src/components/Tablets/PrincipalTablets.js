import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../Header/Header";
import NavBar from "./../NavBar/NavBar";
import { fetchData } from "./../../redux/actions/tabletAction";
import { addTablet } from "../../redux/actions/cartAction";
import TabletDetaills from "./TabletDetaills";
import "./tablets.css";
import Footer from "../Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const PrincipalTablets = ({ list, fetchData, addTablet }) => {
  AOS.init();
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addToCart = (data, quantity) => {
    addTablet(data, quantity);
    Swal.fire({
      text: `Se ha añadido ${quantity} tablet al pedido.`,
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <>
      <NavBar />
      <Header />
      <div className="container">
        <div
          className="sugerencia aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h3 className="section-heading">
            Sugerencias
            <em>del Chef</em>
          </h3>
        </div>
        <div className="rowShow">
          <div
            className="row aos-init aos-animate rowPrincipal"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            {list && list.length
              ? list.map((tablet) => {
                  if (tablet.sugerencia === true) {
                    return (
                      <div className="col-md-4 mb-4 mt-4" key={tablet.id}>
                        <TabletDetaills data={tablet} addToCart={addToCart} />
                      </div>
                    );
                  } else {
                    return null;
                  }
                })
              : ""}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.tabletReducer.list,
    shoppingCart: state.cartReducer.shoppingCart,
  };
};

export default connect(mapStateToProps, {
  fetchData,
  addTablet,
})(PrincipalTablets);

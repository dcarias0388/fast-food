import React from "react";
import { connect } from "react-redux";
import TabletDetaills from "./TabletDetaills";
import swell from "sweetalert";
import { addTablet } from "./../../redux/actions/cartAction";
import Footer from "../Footer/Footer";
import "./tablets.css";
import NavBar from "./../NavBar/NavBar";

function SearchTablets({ addTablet, tabletSearch, characterResults }) {
  const addToCart = (data, quantity) => {
    addTablet(data, quantity);
    swell({
      text: `Se ha añadido ${quantity} tablet al pedido.`,
      icon: "success",
      buttons: false,
      timer: 2000,
    });
  };

  return (
    <React.Fragment>
      <NavBar />
      <div>
        <h2 className="titulo-search">
          Resultados de la búsqueda: {tabletSearch}
        </h2>
      </div>
      <div className="container row">
        {characterResults && characterResults.length ? (
          characterResults.map((tablet) => {
            return (
              <TabletDetaills
                data={tablet}
                key={tablet.id}
                addToCart={addToCart}
              />
            );
          })
        ) : (
          <div>
            <p className="subtitulo-search">
              No hubo coincidencias con el criterio de búsqueda especificado.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    tabletSearch: state.tabletReducer.tabletSearch,
    characterResults: state.tabletReducer.characterResults,
  };
};

export default connect(mapStateToProps, { addTablet })(SearchTablets);

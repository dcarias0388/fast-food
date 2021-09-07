import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./../../redux/actions/tabletAction";
import TabletDetails from "./TabletDetaills";
import "./tablets.css";
import { addTablet } from "./../../redux/actions/cartAction";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../Footer/Footer";
import NavBar from "./../NavBar/NavBar";
import Swal from "sweetalert2";

const TabletListing = ({ list, loading, error, addTablet, fetchData }) => {
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
    <div className="listing">
      <NavBar />
      <div className="container">
        <div className="sugerencia">
          <h3 className="section-heading">
            Menú
            <em>de Tablet</em>
          </h3>
        </div>
        {loading ? "Cargando datos..." : ""}
        {error ? "Recibido error:" + error : ""}

        <Accordion className="divAcordion" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Carnes (cerdo, res y carnero)</Accordion.Header>
            <Accordion.Body>
              <div className="row mt-3">
                {list && list.length
                  ? list.map((tablet) => {
                      if (tablet.tablet.includes("Carne"))
                        return (
                          <div className="col-md-4 mb-4 mt-4" key={tablet.id}>
                            <TabletDetails
                              data={tablet}
                              addToCart={addToCart}
                            />
                          </div>
                        );
                      else return "";
                    })
                  : ""}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Aves (pollo)</Accordion.Header>
            <Accordion.Body>
              <div className="row mt-4">
                {list && list.length
                  ? list.map((tablet) => {
                      if (tablet.tablet.includes("Ave"))
                        return (
                          <div className="col-md-4 mb-4 mt-4" key={tablet.id}>
                            <TabletDetails
                              data={tablet}
                              addToCart={addToCart}
                            />
                          </div>
                        );
                      else return "";
                    })
                  : ""}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Pastas (espaguetis y pizza)</Accordion.Header>
            <Accordion.Body>
              <div className="row mt-4">
                {list && list.length
                  ? list.map((tablet) => {
                      if (tablet.tablet.includes("Pasta"))
                        return (
                          <div className="col-md-4 mb-4 mt-4" key={tablet.id}>
                            <TabletDetails
                              data={tablet}
                              addToCart={addToCart}
                            />
                          </div>
                        );
                      else return "";
                    })
                  : ""}
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Pescados y Mariscos (langosta y camarones)
            </Accordion.Header>
            <Accordion.Body>
              <div className="row mt-4">
                {list && list.length
                  ? list.map((tablet) => {
                      if (tablet.tablet.includes("Marisco"))
                        return (
                          <div className="col-md-4 mb-4 mt-4" key={tablet.id}>
                            <TabletDetails
                              data={tablet}
                              addToCart={addToCart}
                            />
                          </div>
                        );
                      else return "";
                    })
                  : ""}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.tabletReducer.list,
    loading: state.tabletReducer.loading,
    error: state.tabletReducer.error,
  };
};

export default connect(mapStateToProps, { addTablet, fetchData })(
  TabletListing
);

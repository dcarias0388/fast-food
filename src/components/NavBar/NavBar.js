import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { MdAddShoppingCart } from "react-icons/md";
import { openCollapse } from "../../redux/actions/cartAction";
import { updateSearch, resultsSearch } from "../../redux/actions/tabletAction";
import swell from "sweetalert";
import Fuse from "fuse.js";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import icon from "./../../assets/icon.png";

const NavBar = ({
  shoppingCart,
  openCollapse,
  open,
  updateSearch,
  tabletSearch,
  resultsSearch,
  list,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  // const closeCar = (e) => {
  //   console.log("estado del collapse" + e.currentTarget.value);
  // };

  // document.onclick = closeCar;

  const cartAmount = () => {
    return shoppingCart.reduce((acc, value) => {
      return acc + value.qty;
    }, 0);
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const onSearch = (e) => {
    updateSearch(e.target.value);
  };

  const renderSearch = (e) => {
    if (tabletSearch !== "") {
      const fuse = new Fuse(list, {
        keys: ["tablet", "entrante", "principal", "postre", "liquido"],
        threshold: 0.1,
      });

      const result = fuse.search(tabletSearch);

      const tabletResults = result
        ? result.map((tabletRes) => tabletRes.item)
        : [];

      resultsSearch(tabletResults);
    } else {
      e.preventDefault();
      return swell({
        text: "Seleccione un criterio de búsqueda.",
        icon: "warning",
        buttons: false,
        timer: 2000,
      });
    }
  };

  return (
    <React.Fragment>
      <Navbar className="navBar" dark expand="lg">
        <div className="container">
          <NavLink className="nav-link me-0 w-50 textVar" to="/">
            Fast Food <img src={icon} className="iconVar" alt="icon" />{" "}
            Restaurant
          </NavLink>
          <NavbarToggler onClick={toggleNavbar} className="ms-auto" />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/" activeClassName="active">
                  Inicio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/tablets">
                  Tablets
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  Contacto
                </NavLink>
              </NavItem>
              <NavItem>
                <button
                  className="Cart nav-link me-2"
                  type="button"
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  onClick={openCollapse}
                >
                  <MdAddShoppingCart />
                  <div
                    className={`cart-amount ${
                      cartAmount() === 0 ? "hide" : ""
                    }`}
                  >
                    <span>{cartAmount() === 0 ? "" : cartAmount()}</span>
                  </div>
                </button>
              </NavItem>
            </Nav>
            <form className="d-flex">
              <input
                className="form-control me-1"
                type="text"
                name="search"
                value={tabletSearch}
                placeholder="Buscar"
                aria-label="Search"
                onChange={onSearch}
              />
              <NavLink
                className="btn btn-outline-warning"
                to="/search"
                onClick={(e) => renderSearch(e)}
              >
                Buscar
              </NavLink>
            </form>
          </Collapse>
        </div>
      </Navbar>
      <Collapse isOpen={open} className="Colapse">
        <ShoppingCart />
      </Collapse>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    section: ownProps.section,
    list: state.tabletReducer.list,
    shoppingCart: state.cartReducer.shoppingCart,
    open: state.cartReducer.open,
    tabletSearch: state.tabletReducer.tabletSearch,
  };
};

export default connect(mapStateToProps, {
  openCollapse,
  updateSearch,
  resultsSearch,
})(NavBar);

import React from "react";
import PrincipalTablets from "./components/Tablets/PrincipalTablets";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import TabletListing from "./components/Tablets/TabletListing";
import Contact from "./components/Contact/Contact";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import PageToOrden from "./components/Orden/PageToOrden";
import SearchTablets from "./components/Tablets/SearchTablets";

function App() {
  return (
    <div className="rootPage">
      <div className="app">
        <Router basename="/fast-food">
          <Switch>
            <Route path="/" exact component={PrincipalTablets} />
            <Route path="/tablets" component={TabletListing} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/pagar" component={PageToOrden} />
            <Route path="/search" component={SearchTablets} />
            <Route>404 Not Found</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  };
};

export default connect(mapStateToProps, {})(App);

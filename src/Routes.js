import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main/Main";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Search from "./Pages/Search/Search";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Cart from "./Pages/Cart/Cart";
import Contents from "./Components/Contents/Contents";
import "./Styles/common.scss";
import "./Styles/reset.scss";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/contents" component={Contents} />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/productDetail/:name" component={ProductDetail} />
          <Route exact path="/my-account/" component={MyAccount} />
          <Route exact path="/my-account/:id" component={MyAccount} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/search/:search" component={Search} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

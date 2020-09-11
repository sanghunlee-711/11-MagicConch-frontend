import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Search from "./Pages/Search/Search";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Cart from "./Pages/Cart/Cart";
import Contents from "./Components/Contents/Contents";
import Design from "./Pages/Design/Design";
import Fashion from "./Pages/Fashion/Fashion";
import "./Styles/common.scss";
import "./Styles/reset.scss";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/contents" component={Contents} />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/productList/:id" component={ProductList} />
          <Route exact path="/productDetail/:name" component={ProductDetail} />
          <Route exact path="/my-account/" component={MyAccount} />
          <Route exact path="/my-account/:id" component={MyAccount} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/search/:search" component={Search} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/fashion" component={Fashion} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

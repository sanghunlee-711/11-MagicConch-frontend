import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main/Main";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Search from "./Pages/Search/Search";
import MyPage from "./Pages/MyPage/MyPage";
import Cart from "./Pages/Cart/Cart";
import Contents from "./Components/Contents/Contents";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contents" component={Contents} />
          <Route exact path="/productList" component={ProductList} />
          <Route exact path="/productDetail" component={ProductDetail} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/search" component={Search} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

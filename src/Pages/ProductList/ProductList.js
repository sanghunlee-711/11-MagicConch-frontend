import React, { Component } from "react";
import styled, { css } from "styled-components";
import Category from "./Component/Category";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  state = {
    tabOn: 0,
    productlist: [],
  };

  handleTab = (e) => {
    e.preventDefault();
  };

  componentDidMount() {
    fetch("/data/product.json")
      .then((res) => res.json())
      .then((res) => this.setState({ productlist: res.products }));
  }

  render() {
    const { productlist, tabOn } = this.state;
    return (
      <ItemList>
        <div>
          <Category />
        </div>
        <ProductCard list={productlist} tabOn={tabOn} />
      </ItemList>
    );
  }
}

export default ProductList;

const ItemList = styled.main`
  ${(props) => props.theme.setSize("100%", null)}
  padding: 0 2%;
  margin: 0px auto;
`;

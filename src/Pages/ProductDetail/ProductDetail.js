import React, { Component } from "react";
import styled, { css } from "styled-components";
import Category from "../ProductList/Component/Category";
import ProductBox from "./Component/ProductBox";
import Relatedproducts from "./Component/Relatedproducts";

class ProductDetail extends Component {
  state = {
    productInList: [],
  };

  componentDidMount() {
    fetch("/data/productIn.json")
      .then((res) => res.json())
      .then((res) => this.setState({ productInList: res.products_in }));
  }

  render() {
    const { productInList } = this.state;
    return (
      <DetailLayout>
        <Category />
        <ProductBox inlist={productInList} />
        <Relatedproducts />
      </DetailLayout>
    );
  }
}

export default ProductDetail;

const DetailLayout = styled.main`
  padding: 0 2%;
`;

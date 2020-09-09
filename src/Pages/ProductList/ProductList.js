import React, { Component } from "react";
import styled from "styled-components";
import Category from "./Component/Category";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  state = {
    activeTab: 0,
    productAll: [],
  };

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/categories/shop`)
      .then((res) => res.json())
      .then((res) => this.setState({ productAll: res.Products }));
  }

  handleTab = (quary, index, dictionary) => {
    const temp = quary;
    fetch(`http://127.0.0.1:8000/categories/shop/${temp}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productAll: res[dictionary],
        })
      );
    this.setState({ activeTab: index });
  };

  render() {
    const { productAll, activeTab } = this.state;
    return (
      <ItemList>
        <div>
          <Category handleTab={this.handleTab} activeTab={activeTab} />
        </div>
        <ProductCard list={productAll} />
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

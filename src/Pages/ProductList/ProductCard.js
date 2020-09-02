import React, { Component } from "react";
import styled, { css } from "styled-components";
import ProductComponent from "./ProductComponent";

class ProductCard extends Component {
  render() {
    const { list } = this.props;
    return (
      <ContentsList>
        {list.map((list, idx) => {
          return (
            <ProductComponent
              keys={idx}
              outer_image_url={list.outer_image_url}
              product_type={list.product_type}
              outer_tag={list.outer_tag}
              price={list.price}
            />
          );
        })}
      </ContentsList>
    );
  }
}

export default ProductCard;

const ContentsList = styled.div`
  ${(props) => props.theme.setFlex(null, null, "row")}
  flex-wrap: wrap;
`;

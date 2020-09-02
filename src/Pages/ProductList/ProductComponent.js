import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import "../../Styles/common.scss";

class ProductComponent extends Component {
  render() {
    const {
      index,
      outer_image_url,
      product_type,
      outer_tag,
      price,
      keys,
    } = this.props;

  return (
    <>
      <Itembox>
        <Link to={`/productDetail/${keys}`} style={{ color: "#000" }}>
          <div className="ListBox">
            <ItemImage>
              <img src={outer_image_url} />
            </ItemImage>
            <Item>{product_type}</Item>
            <ItemText>{outer_tag}</ItemText>
            <ItemText>${price}</ItemText>
          </div>
        </Link>
      </Itembox>
    </>
    );
  }
}

export default ProductComponent;

const Itembox = styled.li`
  ${(props) => props.theme.setSize("25%", null)}
  padding: 0 15px 45px 15px;
  color: #000;
`;

const ItemImage = styled.figure`
  position: relative;
  margin-bottom: 7px;
  padding: 0;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
    position: relative;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0;
    transition: opacity ease 250ms;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`;

const Item = styled.p`
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const ItemText = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1.5px;
`;

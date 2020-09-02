import React, { Component } from "react";
import styled, { css } from "styled-components";

class CartTable extends Component {
  render() {
    return (
      <ShopTable>
        <Tablehead>
          <tr>
            <th className="tableTitle">Product</th>
            <th className="name"></th>
            <th className="price">Price</th>
            <th className="quantity">Quantity</th>
            <th className="total">Total (USD)</th>
            <th className="remove"></th>
          </tr>
        </Tablehead>
        <tbody>
          <th className="cart_item">
            <td className="thumbnail">
              <img src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/K37_DigitalSubscription_thumb-50x50.jpg" />
            </td>
            <td className="productName">Digital Subscription</td>
            <td className="productPrice">
              <spna>$</spna>40
            </td>
            <td className="productQuantity">
              <div className="selectBox">1</div>
            </td>
            <td className="productTotal">
              <spna>$</spna>40
            </td>
            <td className="productRemove">
              <button>x</button>
            </td>
          </th>
        </tbody>
      </ShopTable>
    );
  }
}

export default CartTable;

const ShopTable = styled.table`
  ${(props) => props.theme.setSize("50%", null)}
`;

const Tablehead = styled.thead`
  text-align: left;

  th{
    padding: 10px 5px;
    border-bottom: 2px solid #333;
  }
`;



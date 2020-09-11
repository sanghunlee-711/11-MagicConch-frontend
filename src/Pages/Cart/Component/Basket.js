import React, { Component } from "react";
import styled, { css } from "styled-components";

class Basket extends Component {
  render() {
    const {
      sumSubtotal,
      calcShippingPrice,
      sumTotalPrice,
      pushBasket,
    } = this.props;

    return (
      <BasketTotals>
        <h2>Basket totals</h2>
        <TableBox>
          <tbody>
            <tr>
              <th>Subtotal</th>
              <td>
                <span>$</span>
                {sumSubtotal}
              </td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td>
                <ul>
                  <li>
                    <span>$</span>
                    {calcShippingPrice}
                  </li>
                  <DetaliFont>
                    Shipping options will be updated during checkout
                  </DetaliFont>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>
                <span>$</span>
                {sumTotalPrice}
              </td>
            </tr>
          </tbody>
        </TableBox>
        <button onClick={pushBasket}>PROCEED TO CHECKOUT</button>
      </BasketTotals>
    );
  }
}

export default Basket;

const BasketTotals = styled.section`
  position: relative;

  h2 {
    font-size: 31px;
  }

  button {
    width: 270px;
    height: 47px;
    position: absolute;
    right: 0;
    background: #4d4d4d;
    font-size: 15px;
    color: #fff;
  }
`;

const TableBox = styled.table`
  border-spacing: 0;

  tbody {
    margin-bottom: 35px;

    tr {
      th {
        font-size: 18px;
        text-align: left;
        border-top-width: 2px;
        border-top: 2px solid #333;
        padding: 25px 0;
      }

      td {
        font-size: 18px;
        text-align: right;
        border-top-width: 2px;
        border-top: 2px solid #333;
        padding: 25px 0;
      }
    }
  }
`;

const DetaliFont = styled.li`
  font-size: 15px;
`;

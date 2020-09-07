import React, { Component } from "react";
import styled, { css } from "styled-components";
import CartTable from "./Component/CartTable";

class Cart extends Component {
  render() {
    return (
      <CartWrap>
        <div>
          <CartMessage>
            <h4>Cart</h4>
          </CartMessage>
          <CartList>
            <ListBtn>
              <h5>BACK TO SHOP</h5>
            </ListBtn>
            <CartTable />
            <div className="coupon">
              <label>
                <input type="text"></input>
              </label>
              <button>Apply Coupon</button>
              <button>Update Basket</button>
            </div>
          </CartList>
          <section className="basketTotals">
            <h2>Basket totals</h2>
            <table>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <th>
                    <spna>$</spna>40
                  </th>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <th>
                    <ul>
                      <li>
                        <spna>$</spna>40
                      </li>
                      <li>Shipping options will be updated during checkout</li>
                    </ul>
                  </th>
                </tr>
                <tr>
                  <th>Total</th>
                  <th>
                    <spna>$</spna>60
                  </th>
                </tr>
                <tr>
                  <th>Recurring totals</th>
                  <th>&nbsp;</th>
                </tr>
                <tr>
                  <th>Subtotal</th>
                  <th>
                    <spna>$</spna>60
                  </th>
                </tr>
                <tr>
                  <th>
                    Recurring
                    <br />
                    total
                  </th>
                  <th>
                    <ul>
                      <li>
                        <spna>$</spna>40
                      </li>
                      <li>First renewal: 06/09/2021</li>
                    </ul>
                  </th>
                </tr>
              </tbody>
            </table>
            <button>PROCEED TO CHECKOUT</button>
          </section>
        </div>
        <div className="interestedBox">
          <section>
            <h2>You may be interested in…</h2>
          </section>
        </div>
      </CartWrap>
    );
  }
}

export default Cart;

const CartWrap = styled.main`
  ${(props) => props.theme.setSize("100%", null)}
  padding: 0 2%;
  margin: 0px auto;
  margin-top: 200px;
`;

const CartMessage = styled.div`
  text-align: center;
  font-size: 20px;
`;

const CartList = styled.section`
  ${(props) => props.theme.setSize("100%", null)}
`;

const ListBtn = styled.div`
  h5{
    text-transform: uppercase;
    font-size: 15px;
  }
`;

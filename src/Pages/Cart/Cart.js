import React, { Component } from "react";
import styled, { css, ThemeConsumer } from "styled-components";
import CartTable from "./Component/CartTable";
import Basket from "./Component/Basket";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  selectComboBoxHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickDeleteButton = (ClickButtonIndex) => {
    const { cartList } = this.state;
    const temp = cartList
      .slice(0, ClickButtonIndex)
      .concat(cartList.slice(ClickButtonIndex + 1, cartList.length));
    this.setState({
      cartList: temp,
    });
  };

  updateBasket = () => {
    fetch("", {
      method: "POST",
      Headers: JSON.stringify({
        identification_for_to_get_cart: "identificaiton_code",
      }),
      body: JSON.stringify({ cart_list: this.state.cartList }),
    }).then((res) => res.json());
  };

  calcSubtotal = (cartList) => {
    let result = 0;
    const temp = cartList.map((el) => el.price * el.amount);
    for (let i in temp) {
      result = result + temp[i];
    }
    return result;
  };

  calcShippingPrince = (cartList) => {
    return cartList.length * 9;
  };

  calcTotalPrice = (subtotalPrice, ShippingPrice) => {
    return subtotalPrice + ShippingPrice;
  };

  componentDidMount = () => {
    fetch()
      .then((res) => res.json())
      .then((res) => this.setState({ cartList: res.cartList }));
  };

  render() {
    console.log(this.state.cartList);
    return (
      <CartWrap>
        <div>
          <CartMessage>
            <h4>Cart</h4>
          </CartMessage>
          <CartBox>
            <CartList>
              <ListBtn>
                <span></span>
                <h5>BACK TO SHOP</h5>
              </ListBtn>
              <CartTable
                handleSelect={this.handleSelect}
                cartList={this.state.cartList}
                handleRemoveBtn={this.handleRemoveBtn}
                updateBasket={this.pushBasket}
              />
            </CartList>
            <Basket
              sumSubtotal={this.sumSubtotal()}
              calcShippingPrice={this.calcShippingPrice()}
              sumTotalPrice={this.sumTotalPrice()}
              updateBasket={this.pushBasket}
            />
          </CartBox>
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
  margin-top: 150px;
`;

const CartMessage = styled.div`
  text-align: center;
  font-size: 20px;

  h4 {
    margin-bottom: 55px;
  }
`;

const CartList = styled.section`
  ${(props) => props.theme.setSize("65%", null)}
  margin-right: 50px;
`;

const ListBtn = styled.div`
  h5 {
    text-transform: uppercase;
    font-size: 15px;
    transition: all 0.7s;
    cursor: pointer;

    &:hover {
      padding-left: 15px;
    }
  }
`;

const CartBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

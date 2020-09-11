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

  handleRemoveBtn = (ClickButtonIndex) => {
    const { cartList } = this.state;
    const temp = cartList
      .slice(0, ClickButtonIndex)
      .concat(cartList.slice(ClickButtonIndex + 1, cartList.length));
    this.setState({ cartList: temp });
  };

  handleSelect = (e) => {
    const key = Number(e.target.name);
    const getState = this.state.cartList;
    getState[key] = { ...getState[key] };
    getState[key].quantity = Number(e.target.value) + 1;
    this.setState(getState);
  };

  sumSubtotal = () => {
    const priceList = this.state.cartList.map(
      (el) => Number(el.product_price) * Number(el.quantity)
    );
    let result = 0;
    for (let i in priceList) {
      result = result + priceList[i];
    }
    return result;
  };

  calcShippingPrice = () => {
    return this.state.cartList.length !== 0
      ? this.state.cartList.length * 9
      : 0;
  };

  sumTotalPrice = () => {
    return this.calcShippingPrice() + this.sumSubtotal();
  };

  pushBasket = () => {
    console.log("click");
    const id = this.state.cartList.map((el) => el.product_id);
    const quantity = this.state.cartList.map((el) => el.quantity);
    fetch(`http://127.0.0.1:8000/basket/product`, {
      method: "POST",
      body: JSON.stringify({
        account_email: "orangemusha@gmail.com",
        product_id: id,
        quantity: quantity,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  componentDidMount = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "orangemusha@gmail.com");
    fetch(`http://127.0.0.1:8000/basket/product`, {
      method: "GET",
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((res) => this.setState({ cartList: res.products }));
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 15px;

  span {
    &::before {
      content: "";
      display: inline-block;
      border: solid 1px #000;
      width: 7px;
      height: 7px;
      box-sizing: border-box;
      border-left: 0;
      border-top: 0;
      transform: rotate(135deg);
      vertical-align: 2px;
      margin-left: 6px;
    }
  }

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

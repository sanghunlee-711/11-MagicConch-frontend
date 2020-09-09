import React, { Component } from "react";
import styled from "styled-components";
import Category from "../ProductList/Component/Category";
import ProductBox from "./Component/ProductBox";

class ProductDetail extends Component {
  state = {
    activeTab: 0,
    productInfo: "",
    quantity: 1,
    isClick: false,
    isName: "",
    buttonText: "Add to Basket",
  };

  handleTab = (query, index) => {
    fetch(`http://127.0.0.1:5500/shop/${query}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          productAll: res,
          activeTab: index,
        })
      );
  };

  handleDetailBtnEvent = (e) => {
    this.setState({
      isClick: !this.state.isClick,
      isName: e,
    });
  };

  clickSelectBox = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickAddBasketBtn = () => {
    const id = [this.state.productInfo.id];
    const quantity = [this.state.quantity];
    console.log(id, quantity);
    fetch(`http://127.0.0.1:8000/basket/product`, {
      method: "POST",
      body: JSON.stringify({
        account_email: "orangemusha@gmail.com",
        /*   localStorage.getItem("email") !== "undefined"
            ? JSON.parse(localStorage.getItem("email"))
            : "", */
        product_id: id,
        quantity: quantity,
      }),
    });
  };

  componentDidMount() {
    const { name } = this.props.match.params;
    fetch(
      `http://127.0.0.1:8000/categories/shop/products?item=${Number(name) + 1}`
    )
      .then((res) => res.json())
      .then((res) => res.Detail[0])
      .then((res) => ({
        id: res.id,
        inner_imgae_url: res.inner_imgae_url
          .split(", ")
          .map((el) => el.slice(1).slice(0, -1)),
        inner_description: res.inner_description,
        inner_tag: res.inner_tag,
        price: res.price,
        inner_details: res.inner_details,
        inner_shipping_handling: res.inner_shipping_handling,
      }))
      .then((res) => this.setState({ productInfo: res }));
  }

  render() {
    const {
      productInfo,
      activeTab,
      isClick,
      isName,
      quantity,
      buttonText,
    } = this.state;
    return (
      <DetailLayout>
        <Category handleTab={this.handleTab} activeTab={activeTab} />
        {productInfo && (
          <ProductBox
            productInfo={productInfo}
            isClick={isClick}
            isName={isName}
            handleDetailBtnEvent={this.handleDetailBtnEvent}
            quantity={quantity}
            productSelectClick={this.productSelectClick}
            clickAddBasketBtn={this.clickAddBasketBtn}
            buttonText={buttonText}
          />
        )}
      </DetailLayout>
    );
  }
}

export default ProductDetail;

const DetailLayout = styled.main`
  padding: 0 2%;
`;

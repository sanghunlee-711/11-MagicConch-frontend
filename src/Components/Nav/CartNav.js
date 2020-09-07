import React from "react";
import styled from "styled-components";
import KinfolkButton from "../Button/KinfolkButton";

export default function CartNav({ CartActive }) {
  return (
    <CartNavBox CartActive={CartActive}>
      <ProductContainer>
        <ul>
          <li>
            <img
              alt="cartImageSrc"
              src="//24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/K36_Product_Cover_Thumb-350x350.jpg"
            ></img>
            <div>
              <span>Issue 36</span>
              <span>2 x $18</span>
              <button>Remove</button>
            </div>
          </li>
        </ul>
      </ProductContainer>
      <Price>
        <span>Subtotal:</span>
        <span>$90</span>
      </Price>
      <ButtonWrapper>
        <KinfolkButton>View Cart</KinfolkButton>
        <KinfolkButton>Checkout</KinfolkButton>
      </ButtonWrapper>
    </CartNavBox>
  );
}

const CartNavBox = styled.section`
  ${(props) => props.theme.setFlex("", "", "column")}
  position: absolute;
  top: 110%;
  right: 5%;
  width: 325px;
  border: 1px solid black;
  background-color: white;
  opacity: ${(props) => (props.CartActive ? 1 : 0)};
  visibility: ${(props) => (props.CartActive ? "visible" : "hidden")};
  transition: all 0.5s ease-in-out;
`;

const ProductContainer = styled.div`
  padding: 2% 10%;

  li {
    display: flex;
    padding: 10px;
    font-size: 15px;

    img {
      width: 70px;
    }

    div {
      margin-left: 25%;
      ${(props) => props.theme.setFlex("", "", "column")}

      span {
        padding: 5px;
      }
    }
  }
`;

const Price = styled.div`
  padding: 3% 13%;
  font-size: 19px;

  span:nth-child(2) {
    margin-left: 32%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 4%;
  margin-bottom: 10px;
`;

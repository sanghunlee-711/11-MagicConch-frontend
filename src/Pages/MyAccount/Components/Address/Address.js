import React, { Component } from "react";
import styled from "styled-components";

class Address extends Component {
  render() {
    const { name, address } = this.props;
    return (
      <article className="Address">
        <p>
          The following addresses will be used on the checkout page by default.
        </p>
        <FlexTap>
          <BoxInFlex>
            <BoxTitle>Billing address</BoxTitle>
            <p>{name ? name : "You have not set up your name yet"}</p>
          </BoxInFlex>
          <BoxInFlex>
            <BoxTitle>Shipping address</BoxTitle>
            <p>{address ? address : "You have not set up your address yet"}</p>
          </BoxInFlex>
        </FlexTap>
      </article>
    );
  }
}

export default Address;

const FlexTap = styled.div`
  display: flex;
  margin-top: 40px;
`;

const BoxInFlex = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const BoxTitle = styled.div`
  font-size: 20px;
  letter-spacing: -2px;
  font-weight: 500;
  font-family: "Lexend Peta";
  margin-bottom: 25px;
`;

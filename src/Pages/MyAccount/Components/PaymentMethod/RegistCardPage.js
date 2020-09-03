import React, { Component } from "react";
import styled from "styled-components";
import SignButton from "../Login/Components/SignButton";

class RegistCardPage extends Component {
  constructor() {
    super();
    this.state = {
      cardNumber: "",
      confirmCCN: true,
      expiryDate: "",
      confirmExpiryDate: true,
      cvcNumber: "",
      confirmCVC: true,
    };
  }

  cardNumberHandler = (e) => {
    if (e.target.value.length > 19) {
    } else if (e.target.value.length !== 0) {
      let ccn = e.target.value;
      ccn = ccn.split(" ").join("");
      ccn = ccn.match(new RegExp(".{1,4}$|.{1,4}", "g")).join(" ");
      this.setState({ cardNumber: ccn });
    } else {
      this.setState({ cardNumber: e.target.value });
    }

    if (e.target.value.length === 19) {
      let temp = e.target.value.replaceAll(" ", "");
      let result = 0;
      for (let i = 0; i < temp.length; i++) {
        let count = (i % 2) + 1;
        let resulttemp = Number(temp[i]) * count;
        resulttemp = resulttemp.toString();
        if (resulttemp.length === 1) {
          resulttemp = "0" + resulttemp;
        }
        result = result + Number(resulttemp[0]) + Number(resulttemp[1]);
      }
      if (result === 55) {
        this.setState({ confirmCCN: true });
      } else {
        this.setState({ confirmCCN: false });
      }
    }
  };

  expiryDateHandler = (e) => {
    const date = e.target.value;
    const isValid = date.length !== 0;
    if (date.length > 5) return alert("you can't more input date");

    const dateParse = date
      .split("/")
      .join("")
      .match(new RegExp(".{1,2}$|.{1,2}", "g"))
      .join("/");
    this.setState({ expiryDate: isValid ? dateParse : date });
  };

  cvcNumHandler = (e) => {
    if (e.target.value.length > 3) return alert("you can't more input date");
    this.setState({ cvcNumber: e.target.value });
  };

  render() {
    return (
      <Article>
        <UpperTextBox>Pay with your credit card via Stripe.</UpperTextBox>
        <UpperTextBox>Card Number *</UpperTextBox>
        <CCNInput
          confirmCCN={this.state.confirmCCN}
          type="text"
          onChange={this.cardNumberHandler}
          value={this.state.cardNumber}
          placeholder="1234 1234 1234 1234"
        />
        <UpperTextBox>Expiry Date *</UpperTextBox>
        <ExpiryDateInput
          confirmExpiryDate={this.state.confirmExpiryDate}
          type="text"
          onChange={this.expiryDateHandler}
          value={this.state.expirydate}
          placeholder="MM/YY"
        />
        <UpperTextBox>Card Code (CVC) *</UpperTextBox>
        <CVCInput
          confirmCVC={this.state.confirmCVC}
          type="text"
          onChange={this.cvcNumHandler}
          value={this.state.cvcNumber}
          placeholder="CVC"
        />
        <SignButton text="Add payment method" />
      </Article>
    );
  }
}

export default RegistCardPage;

const CCNInput = styled.input`
  color: ${(props) => (props.confirmCCN ? "black" : "red")};
`;

const ExpiryDateInput = styled.input`
  color: ${(props) => (props.confirmExpiryDate ? "black" : "red")};
`;

const CVCInput = styled.input`
  color: ${(props) => (props.confirmExpiryDate ? "black" : "red")};
`;

const Article = styled.article`
  input {
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    padding: 5px;
  }

  button {
    margin-top: 20px;
  }
`;

const UpperTextBox = styled.p`
  margin-bottom: 8px;
`;

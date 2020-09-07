import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegistedCardListTable from "./RegistedCardListTable";

class PaymentMethod extends Component {
  constructor() {
    super();
    this.state = {
      paymentMethodList: [],
    };
  }

  onClickHander = (event) => {
    const { paymentMethodList } = this.state;
    const temp = paymentMethodList
      .slice(0, event)
      .concat(paymentMethodList.slice(event + 1, paymentMethodList.length));
    this.setState({
      paymentMethodList: temp,
    });
  };

  componentDidMount() {
    fetch("https://localhost:3000/Data/PaymentMethod/CardList.json")
      .then((res) => res.json())
      .then((res) => this.setState({ paymentMethodList: res.cardList }));
  }

  render() {
    const { paymentMethodList } = this.state;
    return (
      <article>
        {paymentMethodList.length > 0 ? (
          <RegistedCardListTable
            paymentMethodList={paymentMethodList}
            onClickHander={this.onClickHander}
          />
        ) : (
          <p>No saved methods found.</p>
        )}
        <Link to="/my-account/add-payment-method">
          <AddPaymentLink>Add payment method</AddPaymentLink>
        </Link>
      </article>
    );
  }
}

export default PaymentMethod;

const AddPaymentLink = styled.p`
  margin-top: 40px;
  text-decoration: underline;
  font-weight: bold;
`;

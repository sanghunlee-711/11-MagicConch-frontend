import React, { Component } from "react";
import styled from "styled-components";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Order from "./Components/Order/Order";
import Subscription from "./Components/Subsciprtion/Subscription";
import Address from "./Components/Address/Address";
import PaymentMethod from "./Components/PaymentMethod/PaymentMethod";
import AccountDetail from "./Components/AccountDetail/AccountDetail";
import Category from "./Components/Category/Category";
import RegistCardPage from "./Components/PaymentMethod/RegistCardPage";

class MyAccount extends Component {
  constructor() {
    super();
    this.state = {
      access: true,
      pageIdx: "",
    };
  }

  Logout = () => {
    this.setState({ access: false });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({ pageIdx: addressConfirmObj[id] });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const { id } = this.props.match.params;
      this.setState({ pageIdx: addressConfirmObj[id] });
    }
  }

  render() {
    const { access, pageIdx } = this.state;

    return (
      <MainContainer>
        <ContentBox>
          <main className="AccountContainer">
            <MainTitle>{titleArr[pageIdx]}</MainTitle>
            {access ? (
              <Section>
                <Category pageIdx={pageIdx} Logout={this.Logout} />
                {componentArr[pageIdx]}
              </Section>
            ) : (
              <Login />
            )}
          </main>
        </ContentBox>
      </MainContainer>
    );
  }
}

export default MyAccount;

const componentArr = [
  <Dashboard />,
  <Order />,
  <Subscription />,
  <Address />,
  <PaymentMethod />,
  <AccountDetail />,
  "",
  "",
  "",
  "",
  <RegistCardPage />,
];

const addressConfirmObj = {
  undefined: 0,
  order: 1,
  subscriptions: 2,
  "subscription-address-change": 3,
  "payment-methods": 4,
  "edit-account": 5,
  "add-payment-method": 10,
};

const titleArr = [
  "My Account",
  "Order",
  "Subscriptions",
  "Address",
  "Payment method",
  "Account details",
];

const MainContainer = styled.div`
  margin-top: 80px;
  padding: 0 2%;
`;

const ContentBox = styled.div`
  padding: 20px 1.25rem;
`;

const MainTitle = styled.p`
  margin-bottom: 50px;
  text-align: center;
  font-size: 15px;
  letter-spacing: -2px;
  font-family: "Lexend Peta";
`;

const Section = styled.section`
  display: flex;

  article {
    position: relative;
    left: 8.333333%;
    width: 50%;
    padding: 0 1.25rem;
  }
}
`;

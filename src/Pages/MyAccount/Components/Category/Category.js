import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Category extends Component {
  render() {
    const { pageIdx, Logout } = this.props;

    return (
      <Aside className="Category">
        <UnList idx={pageIdx + 1}>
          {CATEGORY_ARR.map((el, idx) => (
            <List key={idx}>
              <span>
                <Link to={`/my-account/${ADDRESS_ARR[idx]}`}>{el}</Link>
              </span>
            </List>
          ))}
          <List onClick={Logout}>
            <span>LOGOUT</span>
          </List>
        </UnList>
      </Aside>
    );
  }
}

export default Category;

const ADDRESS_ARR = [
  "",
  "order/",
  "subscriptions/",
  "subscription-address-change/",
  "payment-methods/",
  "edit-account/",
];

const CATEGORY_ARR = [
  "DASHBOARD",
  "ORDER",
  "SUBSCRIPTIONS",
  "ADDRESSES",
  "PAYMENT METHODS",
  "ACCOUNT DETAILS",
];

const UnList = styled.ul`
  li:first-child {
    margin-top: 0;
  }
  li:nth-child(${({ idx }) => (idx > 6 ? idx % 6 : idx)}) {
    span {
      border-bottom: 1px solid red;
    }
  }
`;

const Aside = styled.aside`
  width: 16.6667%;
  margin-bottom: 30px;
  padding: 0 1.25rem;
`;

const List = styled.li`
  margin-top: 10px;

  &:hover {
    transition-duration: 1s;
    opacity: 0.5;
  }

  span {
    letter-spacing: 1px;
    font-family: "Lexend Peta";
    font-size: 11px;
  }

  a {
    color: black;
  }
`;

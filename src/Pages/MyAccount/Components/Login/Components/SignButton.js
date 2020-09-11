import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class SignButton extends Component {
  render() {
    const { text, onClickHandler } = this.props;
    return (
      <Link to="/my-account">
        <Button onClick={() => onClickHandler(text)}>{text}</Button>
      </Link>
    );
  }
}

export default SignButton;

const Button = styled.button`
  margin-bottom: 20px;
  padding: 8px 23px;
  border: 1px solid black;
  font-size: 20px;

  &:hover {
    transition-duration: 0.5s;
    color: #ffffff;
    background: black;
  }
`;

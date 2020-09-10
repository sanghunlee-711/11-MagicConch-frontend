import React, { Component } from "react";
import styled from "styled-components";

class CheckBoxWithText extends Component {
  render() {
    const { checkoBoxHandler, text } = this.props;
    return (
      <CheckBoxContainer>
        <input type="checkbox" onClick={checkoBoxHandler} />
        <Text>{text}</Text>
      </CheckBoxContainer>
    );
  }
}

export default CheckBoxWithText;

const CheckBoxContainer = styled.div`
  position: relative;
  margin-bottom: 20px;

  input[type="checkbox"] {
    position: absolute;
    cursor: pointer;

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 14px;
      height: 14px;
      top: -3px;
      border: 2px solid black;
      background-color: white;
    }

    &:checked:before {
      content: "";
      display: block;
      position: absolute;
      width: 14px;
      height: 14px;
      top: -3px;
      background-color: black;
    }

    &:checked:after {
      content: "";
      display: block;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      left: 6px;
    }
  }
`;

const Text = styled.span`
  padding-left: 28px;
`;

import React, { Component } from "react";
import styled from "styled-components";

class ErrorTextBox extends Component {
  render() {
    const { printText } = this.props;
    return (
      <ErrorContainer>
        <TextBox>{printText}</TextBox>
      </ErrorContainer>
    );
  }
}

export default ErrorTextBox;

const ErrorContainer = styled.div`
  text-align: center;
  margin-bottom: 100px;
  height: 65px;
`;

const TextBox = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  padding: 12px 20px;
  border: 1px solid black;
  color: red;
  font-size: 14px;
`;

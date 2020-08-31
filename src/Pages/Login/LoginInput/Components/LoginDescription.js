import React, { Component } from "react";
import styled from "styled-components";

class LoginDescription extends Component {
  render() {
    return <HyperText href="">Lost your password?</HyperText>;
  }
}

export default LoginDescription;

const HyperText = styled.a`
  text-decoration: underline;
  margin-bottom: 20px;
  font-size: 15px;
`;

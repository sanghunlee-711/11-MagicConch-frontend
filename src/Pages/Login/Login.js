import React, { Component } from "react";
import styled from "styled-components";
import LoginInput from "./LoginInput/LoginInput";

class Login extends Component {
  render() {
    return (
      <LoginMain>
        <MainTitle>My Account</MainTitle>
        <LoginInput />
      </LoginMain>
    );
  }
}

export default Login;

const LoginMain = styled.main`
  padding: 50px 0 30px 0;
`;

const MainTitle = styled.p`
  margin-bottom: 50px;
  text-align: center;
  font-size: 20px;
`;

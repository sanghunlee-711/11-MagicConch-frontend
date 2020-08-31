import React, { Component } from "react";
import styled from "styled-components";
import LoginArticle from "./Components/LoginArticle";
import RegisterArticle from "./Components/RegisterArticle";
import ErrorTextBox from "./Components/ErrorTextBox";
import { Config } from "./Components/Config";

class LoginInput extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: "",
      userID: "",
      loginPassword: "",
      email: "",
      regPassword: "",
      isAutoLogin: false,
      isSubcriptEmail: false,
    };
  }

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onClickHandler = (event) => {
    const { isAutoLogin, isSubcriptEmail } = this.state;
    const isLogin = event === "Login";

    isLogin
      ? this.setState({ isAutoLogin: !isAutoLogin })
      : this.setState({ isSubcriptEmail: !isSubcriptEmail });
  };

  onSubmitHandler = (event) => {
    const {
      userID,
      loginPassword,
      email,
      regPassword,
      isAutoLogin,
      isSubcriptEmail,
    } = this.state;
    let jsonBody, config;

    if (event === "login") {
      jsonBody = {
        userID: userID,
        loginPassword: loginPassword,
      };
      config = `${Config}/signin`;
    } else {
      jsonBody = {
        email: email,
        regPassword: regPassword,
      };
      config = `${Config}/signup`;
    }

    fetch(config, {
      method: "POST",
      body: JSON.stringify(jsonBody),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ errorMessage: res }))
      .then((res) => localStorage.setItem("access_token", res.access_token));
  };

  render() {
    const {
      errorMessage,
      userID,
      loginPassword,
      email,
      regPassword,
    } = this.state;

    return (
      <>
        {errorMessage && <ErrorTextBox printText={errorMessage} />}
        <Section>
          <LoginArticle
            onChangeHandler={this.onChangeHandler}
            onClickHandler={this.onClickHandler}
            onSubmitHandler={this.onSubmitHandler}
            userID={userID}
            password={loginPassword}
          />
          <RegisterArticle
            onChangeHandler={this.onChangeHandler}
            onClickHandler={this.onClickHandler}
            onSubmitHandler={this.onSubmitHandler}
            email={email}
            password={regPassword}
          />
        </Section>
      </>
    );
  }
}

export default LoginInput;

const Section = styled.section`
  display: flex;
`;

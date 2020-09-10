import React, { Component } from "react";
import styled from "styled-components";
import LoginArticle from "./Components/LoginArticle";
import RegisterArticle from "./Components/RegisterArticle";
import ErrorTextBox from "./Components/ErrorTextBox";
import { config } from "./Components/Config";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
      errorMessage: "",
      loginEmail: "",
      loginPassword: "",
      regEmail: "",
      regPassword: "",
      isAutoLogin: false,
      isSubcriptEmail: false,
    };
  }

  responseKakao = (res) => {
    fetch("http://18.216.31.23:8000/user/kakao_login", {
      method: "POST",
      headers: {
        Authorization: res.response.access_token,
      },
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("login", JSON.stringify(res.token)));
  };

  responseFail = (err) => {
    console.log(err);
  };

  onClickHandler = (event) => {
    const { loginEmail, loginPassword, regEmail, regPassword } = this.state;
    let emailTemp, passwordTemp;

    if (event === "Register") {
      emailTemp = regEmail;
      passwordTemp = regPassword;
      fetch("http://18.216.31.23:8000/user/sign_up", {
        method: "POST",
        body: JSON.stringify({
          email: emailTemp,
          password: passwordTemp,
        }),
      })
        .then((res) => res.json())
        .then((res) => res.message === "");
    }
    if (event === "login") {
      emailTemp = loginEmail;
      passwordTemp = loginPassword;
    }

    fetch("http://18.216.31.23:8000/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailTemp,
        password: passwordTemp,
      }),
    })
      .then((res) => res.json())
      .then((res) =>
        res.token
          ? localStorage.setItem("login", JSON.stringify(res.token))
          : this.setState({ errorMessage: res.message })
      );
  };

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkoBoxHandler = (event) => {
    const { isAutoLogin, isSubcriptEmail } = this.state;
    const isLogin = event === "Login";

    isLogin
      ? this.setState({ isAutoLogin: !isAutoLogin })
      : this.setState({ isSubcriptEmail: !isSubcriptEmail });
  };

  render() {
    const {
      errorMessage,
      loginEmail,
      loginPassword,
      regEmail,
      regPassword,
    } = this.state;

    const {
      onChangeHandler,
      onClickHandler,
      responseKakao,
      responseFail,
      checkoBoxHandler,
    } = this;

    return (
      <>
        {errorMessage && <ErrorTextBox printText={errorMessage} />}
        <Section>
          <LoginArticle
            onChangeHandler={onChangeHandler}
            onClickHandler={onClickHandler}
            checkoBoxHandler={checkoBoxHandler}
            loginEmail={loginEmail}
            password={loginPassword}
          />
          <RegisterArticle
            onChangeHandler={onChangeHandler}
            onClickHandler={onClickHandler}
            checkoBoxHandler={checkoBoxHandler}
            regEmail={regEmail}
            password={regPassword}
            responseKakao={responseKakao}
            responseFail={responseFail}
          />
        </Section>
      </>
    );
  }
}

export default Login;

const Section = styled.section`
  display: flex;
`;

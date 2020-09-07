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
      data: "",
      errorMessage: "",
      userID: "",
      loginPassword: "",
      email: "",
      regPassword: "",
      isAutoLogin: false,
      isSubcriptEmail: false,
      id: "",
      name: "",
      provider: "",
    };
  }

  responseKakao = (res) => {
    console.log("success");
    console.log(res);
    this.setState({
      id: res.profile.id,
      name: res.profile.properties,
      provider: "kakao",
    });
    fetch("http://127.0.0.1:8000/user/kakao_login", {
      method: "POST",
      head: {
        Authorization: res.response.access_token,
      },
    })
      .then((rps) => rps.json())
      .then((rps) => console.log(rps));
  };

  responseFail = (err) => {};

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

  onClickHandler = (event) => {
    const { userID, loginPassword, email, regPassword } = this.state;

    if (event === "login") {
      fetch(`${config}/login`, {
        method: "POST",
        body: JSON.stringify({
          email: userID,
          password: loginPassword,
        }),
      })
        .then((res) => res.json())
        .then((res) =>
          res.token
            ? localStorage.setItem({ access_token: res.token })
            : this.setState({ errorMessage: res.message })
        );
    } else {
      fetch(`${config}/sign_up`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: regPassword,
        }),
      })
        .then((res) => res.json())
        .then((res) => this.setState({ errorMessage: res.message }));
    }
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
            userID={userID}
            password={loginPassword}
          />
          <RegisterArticle
            onChangeHandler={this.onChangeHandler}
            onClickHandler={this.onClickHandler}
            email={email}
            password={regPassword}
            responseKakao={this.responseKakao}
            responseFail={this.responseFail}
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

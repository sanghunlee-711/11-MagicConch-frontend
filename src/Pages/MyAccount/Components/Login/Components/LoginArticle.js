import React, { Component } from "react";
import styled from "styled-components";
import SignButton from "./SignButton";
import InputComboBox from "../../InputComboBox";
import CheckBoxWithText from "./CheckBoxWithText";
import LoginDescription from "./LoginDescription.js";

class LoginArticle extends Component {
  render() {
    const {
      userID,
      loginPassword,
      onChangeHandler,
      onClickHandler,
    } = this.props;

    return (
      <Article>
        <ArticleTitle>Login</ArticleTitle>
        <InputComboBox
          name="userID"
          userInfo={userID}
          onChangeHandler={onChangeHandler}
          topText="Username or email address"
        />
        <InputComboBox
          name="loginPassword"
          password={loginPassword}
          onChangeHandler={onChangeHandler}
          topText="Password"
        />
        <CheckBoxWithText text="Remember me" />
        <StyledButton>
          <SignButton
            onClickHandler={() => onClickHandler("Login")}
            text="Log in"
          />
        </StyledButton>
        <LoginDescription />
      </Article>
    );
  }
}

export default LoginArticle;

const Article = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const ArticleTitle = styled.p`
  margin-bottom: 25px;
  font-size: 18px;
`;

const StyledButton = styled.button`
  display: block;
`;

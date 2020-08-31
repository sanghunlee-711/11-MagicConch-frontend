import React, { Component } from "react";
import styled from "styled-components";
import SignButton from "./SignButton";
import InputComboBox from "./InputComboBox";
import CheckBoxWithText from "./CheckBoxWithText";
import RegisterDescription from "./RegisterDescription.js";

class RegisterArticle extends Component {
  render() {
    const {
      email,
      regPassword,
      onChangeHandler,
      onClickHandler,
      onSubmitHandler,
    } = this.props;

    return (
      <Article>
        <ArticleTitle>Register</ArticleTitle>
        <InputComboBox
          name="email"
          userInfo={email}
          onChangeHandler={onChangeHandler}
          topText="Email address"
        />
        <InputComboBox
          name="regPassword"
          password={regPassword}
          onChangeHandler={onChangeHandler}
          topText="Password"
        />
        <CheckBoxWithText
          onClickHandler={() => onClickHandler("Register")}
          text="Subscribe to our newsletter"
        />
        <RegisterDescription />
        <SignButton
          onClickHandler={() => onSubmitHandler("Register")}
          text="Register"
        />
      </Article>
    );
  }
}

export default RegisterArticle;

const Article = styled.form`
  width: 100%;
  padding: 0 20px;
`;

const ArticleTitle = styled.p`
  margin-bottom: 25px;
  font-size: 18px;
`;

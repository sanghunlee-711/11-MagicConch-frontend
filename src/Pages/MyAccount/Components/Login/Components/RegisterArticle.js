import React, { Component } from "react";
import { Link } from "react-router-dom";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";
import SignButton from "./SignButton";
import InputComboBox from "../../InputComboBox";
import CheckBoxWithText from "./CheckBoxWithText";
import RegisterDescription from "./RegisterDescription.js";

class RegisterArticle extends Component {
  render() {
    const {
      regEmail,
      regPassword,
      onChangeHandler,
      onClickHandler,
      responseKakao,
      responseFail,
      checkoBoxHandler,
    } = this.props;

    return (
      <Article>
        <ArticleTitle>Register</ArticleTitle>
        <InputComboBox
          name="regEmail"
          userInfo={regEmail}
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
          checkoBoxHandler={checkoBoxHandler}
          text="Subscribe to our newsletter"
        />
        <RegisterDescription />
        <SignButton onClickHandler={onClickHandler} text="Register" />
        <Link to="/">
          <KakaoButton
            jsKey="da89fe547c79ff689114a9ad5d34fadf"
            buttonText="Kakao"
            onSuccess={responseKakao}
            onFailure={responseFail}
            getProfile="true"
          />
        </Link>
      </Article>
    );
  }
}

export default RegisterArticle;

const Article = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const ArticleTitle = styled.p`
  margin-bottom: 25px;
  font-size: 18px;
`;

const KakaoButton = styled(KaKaoLogin)`
  margin: 0 30px 30px;
  padding: 8px 23px;
  border: 1px solid black;
  font-size: 20px;

  background: #ffeb00;

  &:hover {
    transition-duration: 0.5s;
    color: white;
    background: black;
  }
`;

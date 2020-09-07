import React, { Component } from "react";
import styled from "styled-components";

class InputComboBox extends Component {
  render() {
    const { name, userInfo, password, topText } = this.props;
    return (
      <TextWithInputComboBox>
        <InputTitleText>
          {topText}
          <span>*</span>
        </InputTitleText>

        {topText.includes("password") || topText.startsWith("Password") ? (
          <InputBox
            type="password"
            value={password}
            name={name}
            onChange={this.props.onChangeHandler}
          />
        ) : (
          <InputBox
            type="text"
            value={userInfo}
            name={name}
            onChange={this.props.onChangeHandler}
          />
        )}
      </TextWithInputComboBox>
    );
  }
}

export default InputComboBox;

const TextWithInputComboBox = styled.div`
  margin-bottom: 10px;
`;

const InputTitleText = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
`;

const InputBox = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 9px;
  border: 1px solid black;
`;

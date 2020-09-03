import React, { Component } from "react";
import styled from "styled-components";
import InputComboBox from "../InputComboBox";
import SignButton from "../SignButton";

class AccountDetail extends Component {
  render() {
    return (
      <article>
        <FlexInputBox>
          <InputComboBox topText="First name" />
          <InputComboBox topText="Last name" />
        </FlexInputBox>
        <InputComboBox topText="Display name" />
        <InputComboBox topText="Email address" />
        <Text>Password change</Text>
        <InputComboBox topText="Current password (leave blank to leave unchanged)" />
        <InputComboBox topText="New password (leave blank to leave unchanged)" />
        <InputComboBox topText="Confirm new password" />
        <SignButton text="Save Change" />
      </article>
    );
  }
}

export default AccountDetail;

const FlexInputBox = styled.div`
  display: flex;

  div {
    width: 100%;
    &:first-child {
      padding-right: 20px;
    }
    &:last-child {
      padding-left: 20px;
    }
  }
`;

const Text = styled.p`
  font-size: 35px;
  margin-bottom: 25px;
`;

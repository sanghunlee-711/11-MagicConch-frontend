import React, { Component } from "react";
import styled from "styled-components";

class RegisterDescription extends Component {
  render() {
    return (
      <Description>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our <HyperText herf="">privacy policy.</HyperText>
      </Description>
    );
  }
}

export default RegisterDescription;

const Description = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
`;

const HyperText = styled.a`
  text-decoration: underline;
`;

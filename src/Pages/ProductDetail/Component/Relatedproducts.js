import React, { Component } from "react";
import styled from "styled-components";

class Relatedproducts extends Component {
  render() {
    return (
      <RelatedWrap>
        <h2>Related products</h2>
      </RelatedWrap>
    );
  }
}

export default Relatedproducts;

const RelatedWrap = styled.section`
  text-align: center;
  border-top: 1px solid #333;
  padding-top: 55px;

  h2 {
    font-size: 20px;
    padding-bottom: 55px;
  }
`;

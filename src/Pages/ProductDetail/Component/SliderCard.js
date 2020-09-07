import React, { Component } from "react";
import styled, { css } from "styled-components";

class SliderCard extends Component {
  render() {
    return (
      <ImgCard src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/K36_Product_Cover_1024x683.jpg" />
    );
  }
}

export default SliderCard;

const ImgCard = styled.img`
  ${(props) => props.theme.setSize("100%", null)}
`;

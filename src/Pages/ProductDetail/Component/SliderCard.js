import React, { Component } from "react";
import styled from "styled-components";

class SliderCard extends Component {
  render() {
    const { imageURL } = this.props;
    return (
      <ImageBox>
        <ImgCard src={imageURL} />
      </ImageBox>
    );
  }
}

export default SliderCard;

const ImageBox = styled.div`
  width: 100%;
  height: 50vh;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
`;

const ImgCard = styled.img`
  height: 100%;
`;

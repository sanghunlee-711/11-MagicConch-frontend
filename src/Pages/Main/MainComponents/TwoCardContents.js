import React from "react";
import styled from "styled-components";

export default function TwoCardContents() {
  return (
    <TwoCardContentsWrapper>
      <ImageWrapper>
        <img
          alt="photoImage"
          src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/Rock_Steady_04-510x765.jpg"
        />
        <img
          alt="photoImage"
          src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/Rock_Steady_05-510x765.jpg"
        />
      </ImageWrapper>
      <NotionWrapper>
        <span>FASHION, ISSUE 37</span>
        <span>ROCK STEADY</span>
        <span>
          A breath of fresh air amid the ancient Stone Forest of Korea
        </span>
      </NotionWrapper>
    </TwoCardContentsWrapper>
  );
}

const TwoCardContentsWrapper = styled.section`
  ${(props) => props.theme.setFlex("center", "center", "column")}
  ${(props) => props.theme.setSize("100vw")};
`;

const ImageWrapper = styled.div`
  ${(props) => props.theme.setFlex("center", "center")}
  margin-bottom: 2%;
  img {
    margin: 2%;
  }
`;

const NotionWrapper = styled.div`
  ${(props) => props.theme.setFlex("center", null, "column")}

  span {
    margin: 3%;
    text-align: center;
  }
  span:nth-child(1) {
    ${(props) => props.theme.setFont("14px", "400")}
  }
  span:nth-child(2) {
    ${(props) => props.theme.setFont("80px", "500")}
    white-space: nowrap;
  }
  span:nth-child(3) {
    ${(props) => props.theme.setFont("18px", "500")}
  }
`;

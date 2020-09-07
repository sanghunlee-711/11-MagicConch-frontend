import React from "react";
import styled, { css } from "styled-components";

export default function FullSizeContents(props) {
  return (
    <div>
      <FullsizePhoto>
        <WordSection translateY={props.translateY}>
          <div>
            <span>{props.subject}</span>
            <span>{props.title}</span>
            <p>{props.word}</p>
          </div>
        </WordSection>
        <BackImage alt="mainImage" src={props.src} />
      </FullsizePhoto>
    </div>
  );
}

const FullsizePhoto = styled.div`
  position: relative;
  ${(props) => props.theme.setSize("100vw", "100vh")};
  margin: 0 -2%;
  padding-top: 22%;
`;

const BackImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  ${(props) => props.theme.setSize("100vw", "100vh")};
`;

const WordSection = styled.section`
  display: block;
  position: sticky;
  top: 50vh;
  z-index: 10;
  ${(props) => props.theme.setFont("0,9375rem", "400", "white")};
  text-align: center;

  div {
    ${(props) => props.theme.setFlex("center", "center", "column")}
  }

  span:nth-child(2) {
    ${(props) => props.theme.setFont("5.625rem", "400")}
  }
`;

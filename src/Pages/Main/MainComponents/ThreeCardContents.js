import React from "react";
import styled from "styled-components";
import CardContents from "./CardContents";

export default function ThreeCardContents({ threeCardData }) {
  return (
    <ContentsWrapper>
      {threeCardData &&
        threeCardData.map(({ src, issue, title, explanation }, index) => (
          <CardContents
            key={index}
            src={src}
            issue={issue}
            title={title}
            explanation={explanation}
          />
        ))}
    </ContentsWrapper>
  );
}

const ContentsWrapper = styled.section`
  display: flex;
  margin: 3% 0;
`;

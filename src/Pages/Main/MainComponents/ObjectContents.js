import React from "react";
import styled from "styled-components";
import CardContents from "./CardContents";

export default function ObjectContents({ objData }) {
  return (
    <ObjectContentsWrapper>
      <ObjectTitle>Selected Stories</ObjectTitle>
      <CardWrapper>
        {objData &&
          objData.map((el, index) => (
            <CardContents
              key={index}
              src={el.src}
              issue={el.issue}
              title={el.title}
              explanation={el.explanation}
            />
          ))}
      </CardWrapper>
    </ObjectContentsWrapper>
  );
}

const ObjectTitle = styled.span`
  width: 100vw;
  padding: 3.5%;
  ${(props) => props.theme.setFont("20px", "400")}
  text-align: center;
  background-color: transparent;
`;

const ObjectContentsWrapper = styled.section`
  ${(props) => props.theme.setFlex(null, null, "column")}
  margin-top: 4%;
`;

const CardWrapper = styled.div`
  margin-bottom: 3%;
  ${(props) => props.theme.setFlex("space-between", "center")}
`;

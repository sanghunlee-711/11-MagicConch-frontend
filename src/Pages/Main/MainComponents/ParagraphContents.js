import React from "react";
import styled from "styled-components";

export default function ParagraphContents() {
  return (
    <ParagraphContentsContainer>
      <ParagraphContainer>
        <div>
          <span>ART&CULTURE</span>
          <span>JENNY SLATE</span>
        </div>
        <p>
          "What do you get when you cross a free spirit with a stand-up
          comedian? Over lemon squares at home in Los Angeles, Jenny Slate
          delivers the punch line. Words by Robert Ito. Photography by Emman
          Montalvan. Styling by Jesse Arifien. Makeup by Kirin Bhatty. Hair by
          Nikki Providence. Set Design by Kelly Fondry. Photo Assistants by
          Patrick Molina & Angel Castro."
        </p>
      </ParagraphContainer>

      <ImageComtainer>
        <img
          alt="ContentsImage"
          src="https://www.kinfolk.com/wp-content/uploads/2020/04/Jenny_Slate_03-2000x2667.jpg"
        />
      </ImageComtainer>
    </ParagraphContentsContainer>
  );
}

const ParagraphContentsContainer = styled.section`
  ${(props) => props.theme.setFlex("space-between")}
  margin: 10% 0;
  padding: 3%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const ParagraphContainer = styled.div`
  ${(props) => props.theme.setFlex("space-between", null, "column")}

  div {
    ${(props) => props.theme.setFlex(null, null, "column")}
    span:nth-child(1) {
      font-size: 13px;
    }

    span:nth-child(2) {
      font-size: 100px;
    }
  }

  p {
    width: 50%;
  }
`;

const ImageComtainer = styled.div`
  overflow-anchor: auto;
  width: 50vw;

  img {
    width: 100%;
  }
`;

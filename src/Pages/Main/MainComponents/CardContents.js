import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CardContents({
  width,
  height,
  padding,
  borderLeft,
  src,
  issue,
  title,
  explanation,
  minWidth,
}) {
  return (
    <EachContents
      width={width}
      height={height}
      borderLeft={borderLeft}
      minWidth={minWidth}
      padding={padding}
    >
      <Link to="/" href="https://www.kinfolk.com/at-home-with-kinfolk/">
        <img src={src} alt="AtHomeWithKinfolk_IG_01" />
      </Link>
      <ContentsIntro>
        <div>
          <span>{issue}</span>
          <span>
            <Link to="/">{title}</Link>
          </span>
        </div>
        <p>
          {explanation ||
            "Join us for the first in a new series of experiential exhibitions."}
        </p>
      </ContentsIntro>
    </EachContents>
  );
}

const EachContents = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border-left: ${(props) => props.borderLeft};
  min-width: ${(props) => props.minWidth};
  padding: ${(props) => props.padding || "2%"};

  img {
    display: block;
    width: 100%;
  }
`;

const ContentsIntro = styled.div`
  div {
    height: 100%;
    ${(props) => props.theme.setFlex("space-evenly", null, "column")}

    span {
      margin: 10px 0;
      ${(props) => props.theme.footerHover};
      span:nth-child(1) {
        font-size: 15px;
      }

      span:nth-child(2) {
        font-weight: 700;
      }
    }
  }

  p {
    ${(props) => props.theme.setFont("15px", "350")}
  }
`;

export default CardContents;

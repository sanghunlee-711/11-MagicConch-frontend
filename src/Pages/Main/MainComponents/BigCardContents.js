import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function BigCardContents({ issue, title, paragraph, src, height }) {
  return (
    <EachContents>
      <StickyWrapper height={height}>
        <Link to="/" href="https://www.kinfolk.com/at-home-with-kinfolk/">
          <img
            src={
              src ||
              "https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/K37_Product_Cover_Thumb.jpg"
            }
            alt="AtHomeWithKinfolk_IG_01"
          />
        </Link>
        <ContentsIntro>
          <div>
            <span>{issue || "Issue 37"}</span>
            <span>
              <Link to="/">{title || "DownSizing"}</Link>
            </span>
          </div>
          <p>{paragraph || SAMPLE_CONTEXT}</p>
        </ContentsIntro>
      </StickyWrapper>
    </EachContents>
  );
}

const StickyWrapper = styled.div`
  position: sticky;
  top: 10%;
  height: ${(props) => props.height};
`;

const EachContents = styled.div`
  height: 1877.31px;
  position: relative;
  top: 10%;
  width: 50vw;
  padding: 2%;

  img {
    display: block;
    width: 100%;
  }
`;

const ContentsIntro = styled.div`
  text-align: center;
  margin-top: 10%;
  div {
    height: 100%;
    ${(props) => props.theme.setFlex("space-evenly", null, "column")}
    span {
      margin: 10px 0;
      ${(props) => props.theme.footerHover};
      &:nth-child(2) {
        font-size: 70px;
      }
    }
  }

  p {
    padding: 50px 80px;
    ${(props) => props.theme.setFont("25px", "250")}
  }
`;

export default BigCardContents;

const SAMPLE_CONTEXT =
  "The importance of nature for both our personal wellbeing and global prosperity has never been clearer. With a cautious return to the great outdoors now on our shared horizon, Kinfolk heeds the enticing call of the wild.";

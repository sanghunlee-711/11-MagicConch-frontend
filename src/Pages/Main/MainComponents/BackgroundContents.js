import React from "react";
import styled from "styled-components";

export default function BackgroundContents(props) {
  return (
    <ScrollBackground transitionY={props.transitionY && props.transitionY}>
      <div></div>
    </ScrollBackground>
  );
}

const ScrollBackground = styled.section`
  ${(props) => props.theme.setSize("100vw", "50vh")};
  background-position: center;
  background-size: cover;
  background: url("https://www.kinfolk.com/wp-content/uploads/2020/09/MGBW_KINFOLK_BANNER_updated2-copy-2000x1250.jpg")
    center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  z-index: -100;

  div {
    position: absolute;
    width: 100%;
    height: 30vh;
    background-color: transparent;
  }
`;

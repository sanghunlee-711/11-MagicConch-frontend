import React from "react";
import styled from "styled-components";

export default function QuitButton() {
  return (
    <Quit>
      <svg viewBox="0 0 20px 20px">
        <rect
          x="-2.8"
          y="8.2"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.8077 9.1924)"
          width="24"
          height="2"
        ></rect>
        <rect
          x="8.2"
          y="-2.8"
          transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.8077 9.1924)"
          width="2"
          height="24"
        ></rect>
      </svg>
    </Quit>
  );
}

const Quit = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 35px;
  right: 65px;
  svg {
    width: 20px;
    height: 20px;
    transition: all 0.2s ease-in;
    &:hover {
      transform: rotate(45deg);
      transition: all 0.2s ease-in;
    }
  }
`;

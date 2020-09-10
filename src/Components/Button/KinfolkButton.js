import styled from "styled-components";
import { Link } from "react-router-dom";

const KinfolkButton = styled(Link)`
  margin: auto;
  padding: 8px 23px;
  border: 1px solid black;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  transition: 200ms linear;
  ${(props) => props.theme.footerHover}
  &:hover {
    transition: ease 250ms color;
    color: white;
    background-color: black;
  }
`;

export default KinfolkButton;

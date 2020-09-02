import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SVG from "./Svg";

export default function Nav() {
  return (
    <NavContents>
      <NavWrapper>
        <div>
          <NavLeftButton>
            <li>
              <KinfolkButton>Subscribe</KinfolkButton>
            </li>
            <li>
              Issue<span>36</span>
            </li>
            <li>Shop</li>
          </NavLeftButton>
        </div>
        <TitleLogo
          alt="TitleLogo"
          src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/logo.svg"
        />
        <NavRightButton>
          <li>
            <CartMark>
              <SVG
                viewBox="-4 -4 30 30"
                width="27px"
                height="27px"
                rectx="1"
                recty="5"
                rectw="20px"
                recth="13px"
                polyPoints="5 7 5 1 17 1 17 7"
              />
              <div>
                <span>(1)</span>
              </div>
            </CartMark>
          </li>
          <li>
            <SearchMark>
              <SVG
                fill="#000000"
                viewBox="0 0 30 30"
                width="18px"
                height="18px"
                pathD={SEARCH_MARKET_PATH}
              />
            </SearchMark>
          </li>
          <li>
            <BurgerMark>
              <span />
              <span />
              <span />
            </BurgerMark>
          </li>
        </NavRightButton>
      </NavWrapper>
    </NavContents>
  );
}

const NavContents = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 2.5%;
`;

const NavWrapper = styled.div`
  ${(props) => props.theme.setFlex("space-between", "center")}
  padding: 25px 0;
  border-bottom: 2px solid black;
`;

const KinfolkButton = styled(Link)`
  padding: 10% 25%;
  margin: auto;
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

const NavRightButton = styled.ul`
  ${(props) => props.theme.setFlex(null, "center")}
`;

const NavLeftButton = styled(NavRightButton)`
  li {
    font-size: 18px;
    font-weight: 500;
    width: 100%;
    text-align: center;
  }
  li:nth-child(2) {
    margin-right: 40px;
  }
  li:nth-child(1) {
    margin-right: 65px;
  }
`;

const TitleLogo = styled.img`
  ${(props) => props.theme.setSize("100%", "23px")}
`;

const CartMark = styled.button`
  display: flex;
  margin-right: 20px;

  span {
    margin-bottom: 20px;
    color: #999999;
    font-size: 10px;
    letter-spacing: 2px;
  }

  svg {
    fill: none;
    stroke: #333;
    stroke-width: 2px;
  }
`;

const SearchMark = styled.button`
  margin-right: 35px;

  svg {
    stroke: #333;
    stroke-width: 1px;
  }
`;

const BurgerMark = styled.div`
  ${(props) => props.theme.setFlex("space-between", null, "column")}
  ${(props) => props.theme.setSize("36px", "17px")}
  cursor: pointer;

  span {
    ${(props) => props.theme.setSize("100%", "15%")}
    background-color: black;
  }
`;

const SEARCH_MARKET_PATH =
  "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z";

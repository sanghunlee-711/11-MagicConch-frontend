import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import SVG from "./Svg";
import CategoryNav from "./CategoryNav";
import CartNav from "./CartNav";
import KinfolkButton from "../Button/KinfolkButton";
import SearchModal from "./SearchModal";
import useScrollLogo from "./LogoScroll";

function Nav(props) {
  const [SearchModalActive, setSearchModalActive] = useState(false);
  const [CategoryNavActive, setCategoryNavActive] = useState(false);
  const [CartActive, setCartActive] = useState(false);
  const [FilteredValue, setFilteredValue] = useState("");
  const ScrollLogoMatrix = useScrollLogo();

  const ShowCart = () => {
    window.addEventListener("scroll", () => {
      setCartActive(false);
    });

    CartActive ? setCartActive(false) : setCartActive(true);
  };

  const ShowSearch = () => {
    SearchModalActive
      ? setSearchModalActive(false)
      : setSearchModalActive(true);
  };

  const ShowCategory = () => {
    CategoryNavActive
      ? setCategoryNavActive(false)
      : setCategoryNavActive(true);
  };

  const SearchFilter = (e) => {
    setFilteredValue(e.target.value);
  };

  const search = useHistory();
  const goSearchPage = (e) => {
    if (e.keyCode === 13) {
      setSearchModalActive(false);
      search.push(`/search/${FilteredValue}`);
    }
  };

  return (
    <NavContents>
      <NavWrapper>
        <div>
          <NavLeftButton>
            <li>
              <KinfolkButton to="/">Subscribe</KinfolkButton>
            </li>
            <li>
              Issue<span>36</span>
            </li>
            <Link to="/productList">
              <li>Shop</li>
            </Link>
          </NavLeftButton>
        </div>
        <Link to="/">
          <TitleLogo
            alt="TitleLogo"
            src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/logo.svg"
            {...ScrollLogoMatrix}
          />
        </Link>
        <NavRightButton>
          <li>
            <CartMark onClick={ShowCart}>
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
            <SearchMark onClick={ShowSearch}>
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
            <BurgerMark onClick={ShowCategory}>
              <span />
              <span />
              <span />
            </BurgerMark>
          </li>
        </NavRightButton>
      </NavWrapper>
      <SearchModal
        setSearchModalActive={setSearchModalActive}
        SearchFilter={SearchFilter}
        setFilteredValue={setFilteredValue}
        FilteredValue={FilteredValue}
        goSearchPage={goSearchPage}
        SearchModalActive={SearchModalActive}
      />
      <CategoryNav
        setCategoryNavActive={setCategoryNavActive}
        CategoryNavActive={CategoryNavActive}
      />
      <CartNav CartActive={CartActive} />
    </NavContents>
  );
}

export default Nav;

const NavContents = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  padding: 0 2.5%;
  z-index: 99;
  background-color: #fff;
`;

const NavWrapper = styled.div`
  ${(props) => props.theme.setFlex("space-between", "center")}
  padding: 25px 0;
  border-bottom: 2px solid black;
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
  transform: matrix(5, 0, 0, 5, 0, 190);
  position: absolute;
  right: 44%;
  ${(props) => props.theme.setSize(null, "23px")}
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

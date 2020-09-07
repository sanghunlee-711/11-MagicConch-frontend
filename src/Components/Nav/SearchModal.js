import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import QuitButton from "../Button/QuitButton";

export default function SearchModal({
  setSearchModalActive,
  SearchFilter,
  setFilteredValue,
  FilteredValue,
  goSearchPage,
  SearchModalActive,
}) {
  return (
    <SearchModalContent SearchModalActive={SearchModalActive}>
      <SearchModalContainer>
        <div onClick={() => setSearchModalActive(false)}>
          <QuitButton />
        </div>
        <TextWrapper>
          <input
            type="input"
            onChange={SearchFilter}
            onKeyDown={goSearchPage}
            value={FilteredValue}
          />
          <span>BROWSE CATEGORIES</span>
          <ul>
            {SEARCH_LIST.map((el) => (
              <li key={el}>
                <Link to="/">{el}</Link>
              </li>
            ))}
          </ul>
        </TextWrapper>
      </SearchModalContainer>
    </SearchModalContent>
  );
}

const SearchModalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: white;
  transition: all 0.5s linear;
  opacity: ${(props) => (props.SearchModalActive ? 1 : 0)};
  visibility: ${(props) => (props.SearchModalActive ? "visible" : "hidden")};
`;

const SearchModalContainer = styled.div`
  ${(props) => props.theme.setFlex(null, "center", "column")}
  margin: 17% 0;
`;

const TextWrapper = styled.div`
  text-align: center;

  input {
    width: 80%;
    padding: 12px 0;
    margin: 0 auto 60px auto;
    border-bottom: 1px solid black;
    font-size: 1rem;
  }

  span {
    display: block;
    margin: 10px 0;
    font-size: 0.8rem;
  }

  ul {
    width: 80%;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;

    li {
      display: inline-block;
      font-size: 2.625rem;
      font-weight: 350;
      letter-spacing: 0.015em;
    }
  }
`;

const SEARCH_LIST = [
  "Design /",
  "Fashion /",
  "Interiors /",
  "Arts & Culture /",
  "Food /",
  "Music /",
  "City /",
  "Guides /",
  "Audio /",
  "All Stories ",
];

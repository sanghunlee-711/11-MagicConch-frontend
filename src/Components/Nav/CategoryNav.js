import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KinfolkButton from "../Button/KinfolkButton";
import QuitButton from "../Button/QuitButton";

export default function CategoryNav({
  setCategoryNavActive,
  CategoryNavActive,
}) {
  return (
    <CategoryNavContents CategoryNavActive={CategoryNavActive}>
      <CategoryNavContainer>
        <div onClick={() => setCategoryNavActive(false)}>
          <QuitButton />
        </div>
        <CategoryText>
          <ul>
            {CATEGORY_SET.ArtCategory.map((el) => (
              <li>
                <Link to="/design">{el}</Link>
              </li>
            ))}
          </ul>
        </CategoryText>
        <IssueCategory>
          <ul>
            {CATEGORY_SET.ShopCategory.map((el, index) => (
              <li key={index}>
                <Link to="/">{el}</Link>
              </li>
            ))}
          </ul>
        </IssueCategory>
        <Sns>
          <ul>
            {CATEGORY_SET.Sns.map((el, index) => (
              <li key={index}>
                <Link to="/">{el}</Link>
              </li>
            ))}
          </ul>
        </Sns>
        <ButtonWrapper>
          <KinfolkButton to="/login">Log In/Register</KinfolkButton>
          <KinfolkButton>Subscribe</KinfolkButton>
        </ButtonWrapper>
      </CategoryNavContainer>
    </CategoryNavContents>
  );
}

const CategoryNavContents = styled.div`
  position: absolute;
  ${(props) => props.theme.setSize("100vw", "100vh")}
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${(props) => (props.CategoryNavActive ? 1 : 0)};
  visibility: ${(props) => (props.CategoryNavActive ? "visible" : "hidden")};
  transition: all 0.5s ease-in-out;
`;

const CategoryNavContainer = styled.nav`
  position: fixed;
  ${(props) => props.theme.setSize("490px", "100%")}
  top: 0;
  right: 0;
  padding: 3%;
  overflow: auto;
  background-color: white;
`;

const CategoryText = styled.section`
  ul {
    border-bottom: 0.1px solid gray;
    padding-bottom: 30px;

    li {
      font-size: 25px;
      font-weight: 350;

      a {
        ${(props) => props.theme.footerHover}
      }
    }
  }
`;

const IssueCategory = styled(CategoryText)`
  margin-top: 30px;
  border-bottom: 3px solid black;
`;

const Sns = styled.section`
  margin-top: 30px;

  ul {
    padding-bottom: 30px;

    li {
      margin: 2px;
      ${(props) => props.theme.setFont("15px", "600")}

      a {
        ${(props) => props.theme.footerHover}
      }
    }
  }
`;

const ButtonWrapper = styled.section`
  display: flex;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 40px;

  a {
    display: block;
    width: 200px;
    height: 46px;
    padding: 12px 23px;
    margin: 20px;
  }
`;

const CATEGORY_SET = {
  ArtCategory: [
    "Design",
    "Fashion",
    "Interiors",
    "Arts&Cultures",
    "Food",
    "Music",
    "City Guides",
    "Audio",
    "All Stories",
  ],
  ShopCategory: ["Shop", "Current Issue", "Kinfolk Dosan", "Gallery", "About"],
  Sns: ["FACEBOOK", "TWITTER", "INSTAGRAM"],
};

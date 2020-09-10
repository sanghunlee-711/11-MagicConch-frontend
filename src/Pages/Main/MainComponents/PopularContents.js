import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function PopularContents({ popularData }) {
  return (
    <PopularContainer>
      <TitleWord>Popular</TitleWord>
      <CardWrapper>
        {popularData &&
          popularData.map((el, index) => (
            <SmallContents key={index}>
              <img alt="popularPicture" src={el.src} />
              <WordWrapper>
                <span>{el.issue}</span>
                <span>{el.title}</span>
                <span>{el.notion}</span>
              </WordWrapper>
            </SmallContents>
          ))}
      </CardWrapper>
      <CheckboxWrapper>
        <span>Sign up to the Kinfolk newsletter</span>
        <InputWrapper>
          <input type="email" placeholder="YOUR EMAIL" />
          <input type="submit" />
        </InputWrapper>
        <Terms>
          <input type="checkbox" />
          <span>
            I’ve read and accept the <Link to="/">terms&conditions</Link>
          </span>
        </Terms>
      </CheckboxWrapper>
    </PopularContainer>
  );
}

const Terms = styled.div`
  display: flex;
  margin-top: 20px;
  input {
    margin-right: 20px;
  }
  a {
    text-decoration: underline;
  }
`;

const CheckboxWrapper = styled.div`
  ${(props) => props.theme.setFlex("space-between", "center", "column")}
  width: 100vw;
  margin-top: 3%;
  margin-bottom: 20%;
  background-color: none;

  span:nth-child(1) {
    font-size: 18px;
  }
`;
const InputWrapper = styled.div`
  ${(props) => props.theme.setFlex("center")}
  width: 100vw;
  margin-top: 3%;
  font-size: 14px;

  input {
    border-bottom: 1px solid black;
  }
  input:nth-child(1) {
    width: 30%;
  }
`;

const PopularContainer = styled.section`
  ${(props) => props.theme.setFlex("center", "center", "column")}
  max-width: 100vw;
  border-top: 1px solid black;
`;

const WordWrapper = styled.div`
  ${(props) => props.theme.setFlex(null, null, "column")}
  span {
    margin: 2%;
    font-size: 13px;
  }

  span:nth-child(2) {
    font-size: 20px;
  }
`;

const TitleWord = styled.span`
  margin: 40px 0;
  text-align: center;
  font-size: 18px;
`;

const CardWrapper = styled.div`
  ${(props) => props.theme.setFlex("space-evenly")}
  flex-wrap: wrap;
`;
const SmallContents = styled.div`
  display: flex;
  width: 50%;
  padding: 30px 20px;

  img {
    width: 25%;
    margin-right: 20px;
  }
`;

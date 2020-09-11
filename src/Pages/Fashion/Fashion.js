import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BigCardContents from "../Main/MainComponents/BigCardContents";
import CardContents from "../Main/MainComponents/CardContents";
import GoPrevButton from "../../Components/Button/GoPrevButton";
import GoNextButton from "../../Components/Button/GoNextButton";
import Nav from "../../Components/Nav/DefaultNav";
import Footer from "../../Components/Footer/Footer";

export default function Design(props) {
  const [data, setData] = useState([]);
  const { Fashion } = data;
  const GridFashion = Fashion?.slice(1, 10);
  const BigPhoto = Fashion?.slice(0, 1);
  const BottomFashion = Fashion?.slice(11, 35);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/categories/fashions")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <DesignContents>
      <Nav />
      <Category>
        <ButtonWrapper>
          <GoPrevButton />
          <Link to="/design">Design</Link>
        </ButtonWrapper>
        <Theme>FASHION</Theme>
        <NextButton>
          <Link to="/fashion">INTERIORS</Link>
          <GoNextButton />
        </NextButton>
      </Category>
      <ScrolledStopPhoto>
        {BigPhoto?.map(({ image_url, description, title, tag, id }, index) => (
          <BigCardContents
            key={id}
            issue={tag}
            title={title}
            paragraph={description}
            src={image_url.slice(1, -1)}
          />
        ))}

        <SmallPhotoWrapper>
          {GridFashion?.map(
            ({ id, width, image_url, tag, title, description }, index) => (
              <CardContents
                key={id}
                index={index}
                width="33%"
                height="auto"
                src={image_url.slice(1, -1)}
                issue={tag}
                title={title}
                explanation={description}
              />
            )
          )}
        </SmallPhotoWrapper>
      </ScrolledStopPhoto>
      <GridSection>
        {BottomFashion?.map(({ image_url, tag, title, description }, index) => (
          <CardContents
            width="16.6%"
            height="529px"
            padding="16% 2.5%"
            key={index}
            src={image_url.slice(1, -1)}
            issue={tag}
            title={title}
            explanation={description}
          />
        ))}
      </GridSection>
      <PageChangeButton>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>6</span>
        <span>Next</span>
      </PageChangeButton>
      <Footer />
    </DesignContents>
  );
}

const PageChangeButton = styled.div`
  padding: 10% 0%;
  text-align: center;

  span {
    margin: 0px 10px;
    font-size: 1rem;
  }
`;

const GridSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Theme = styled.span`
  ${(props) => props.theme.setFlex("center", "center")}
  font-size: 4.725rem;
`;

const ButtonWrapper = styled.button`
  ${(props) => props.theme.setFlex("flex-start", "center")}
  width: 100%;

  svg {
    width: 8px;
    height: 14px;
    margin-bottom: 3px;
    fill: #d17d74;
  }

  a {
    margin: 0px 10px;
    font-size: 16px;

    &:hover {
      margin: 0px 20px;
      transition: margin ease 500ms;
    }
  }
`;

const NextButton = styled(ButtonWrapper)`
  justify-content: flex-end;
`;

const Category = styled.div`
  ${(props) => props.theme.setFlex("space-between")}
  ${(props) => props.theme.setSize("100vw", "30vh")}
  padding: 0 2.5%;
`;

const DesignContents = styled.main`
  margin-top: 80px;
`;

const ScrolledStopPhoto = styled.div`
  display: flex;
  position: ${(props) => props.cardToggle};
  height: 100%;
  ${(props) => props.theme.setSize("100vw")}
`;

const SmallPhotoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  padding: 2%;
  ${(props) => props.theme.setSize("50vw")}
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BigCardContents from "../Main/MainComponents/BigCardContents";
import CardContents from "../Main/MainComponents/CardContents";
import GoPrevButton from "../../Components/Button/GoPrevButton";
import GoNextButton from "../../Components/Button/GoNextButton";

export default function Design() {
  const [data, setData] = useState([]);
  const { gridContents } = data;

  useEffect(() => {
    fetch("/data/mainMockdata.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <DesignContents>
      <Category>
        <ButtonWrapper>
          <GoPrevButton />
          <span>ALL STORIES</span>
        </ButtonWrapper>
        <Theme>Design</Theme>
        <NextButton>
          <span>FASHION</span>
          <GoNextButton />
        </NextButton>
      </Category>
      <ScrolledStopPhoto>
        <BigCardContents
          issue="FEATURE"
          title="Downsizing"
          paragraph={SAMPLE_TEXT}
        />
        <SmallPhotoWrapper>
          {gridContents?.map(
            ({ id, width, src, issue, title, explanation }, index) => (
              <CardContents
                key={id}
                index={index}
                width={width}
                src={src}
                issue={issue}
                title={title}
                explanation={explanation}
              />
            )
          )}
        </SmallPhotoWrapper>
      </ScrolledStopPhoto>
      <GridSection>
        {gridContents?.map(({ src, issue, title, explanation }, index) => (
          <CardContents
            src={src}
            width="16.6%"
            height="529px"
            key={index}
            issue={issue}
            title={title}
            explanation={explanation}
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

  span {
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
  ${(props) => props.theme.setSize("100vw")}
`;

const SmallPhotoWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 33%);
  grid-template-columns: repeat(3, 33%);
  ${(props) => props.theme.setSize("50vw")}
  margin: 30px;
  grid-template-areas:
    "SmallContents SmallContents SmallContents"
    "SmallContents SmallContents SmallContents"
    "SmallContents SmallContents SmallContents";
  SmallContents {
    grid-area: SmallContents;
  }
`;

const SAMPLE_TEXT =
  "Unable to travel during lockdown, architects Salem Charabi & Rasmus Stroyberg decided to recreate a favorite building.";

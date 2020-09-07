import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import FullSizeContents from "./MainComponents/FullSizeContents";
import CardContents from "./MainComponents/CardContents";
import ParagraphContents from "./MainComponents/ParagraphContents";
import BackgroundContents from "./MainComponents/BackgroundContents";
import SlideCotents from "./MainComponents/SlideCotents";
import ObjectContents from "./MainComponents/ObjectContents";
import TwoCardContents from "./MainComponents/TwoCardContents";
import ThreeCardContents from "./MainComponents/ThreeCardContents";
import PopularContents from "./MainComponents/PopularContents";
import BigCardContents from "./MainComponents/BigCardContents";

function Main() {
  const [data, setData] = useState([]);
  const {
    gridContents,
    objectContents,
    threeCardContents,
    popularContents,
    BookPhoto,
  } = data;
  const MainBackRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    fetch("/data/mainMockdata.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <MainContents className="Main">
      <MainContainer>
        <FullSizeContents
          src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/Rock_Steady_01-2000x1333.jpg"
          subject="FASHION"
          title="ROCK STEADY"
          word="A breath of fresh air amid the ancient Stone Forest of Korea."
        />
        <ScrolledStopPhoto>
          <BigCardContents />
          <SmallPhotoWrapper ref={MainBackRef}>
            {gridContents &&
              gridContents.map((el, index) => (
                <CardContents
                  key={index}
                  index={index}
                  width={el.width}
                  src={el.src}
                  issue={el.issue}
                  title={el.title}
                  explanation={el.explanation}
                />
              ))}
          </SmallPhotoWrapper>
        </ScrolledStopPhoto>
        <ParagraphContents />
        <div ref={backgroundRef}>
          <BackgroundContents />
        </div>
        <Mention>Current Issue</Mention>
        <SlideCotents BookPhoto={BookPhoto} />
        <ObjectContents objData={objectContents} />
        <FullSizeContents
          src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/AtHomeWithKinfolk_web_02-2000x1500.jpg"
          subject=""
          title="Kinfolk Dosan"
          word="A New Community Space in Seoul. "
        />
        <TwoCardContents />
        <BackgroundContents />
        <ObjectContents objData={objectContents} />
        <FullSizeContents
          src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/Rendered_Impossible_04-2000x1270.jpg"
          subject="ARTS & CULTURES"
          title="Rendered Impossible"
          word="Those who can only dream of the great outdoors may as well have some fun while doing it."
        />
        <ParagraphContents />
        <ObjectContents objData={objectContents} />
        <ThreeCardContents threeCardData={threeCardContents} />
        <PopularContents popularData={popularContents} />
      </MainContainer>
    </MainContents>
  );
}

const Mention = styled.span`
  display: block;
  padding-top: 80px;
  ${(props) => props.theme.setSize("100vw", "20vh")}
  font-size: 18px;
  font-weight: 400;
  text-align: center;
`;

const MainContents = styled.section`
  margin-top: 250px;
  position: relative;
`;

const MainContainer = styled.main`
  position: relative;
  height: 100%;
  margin-top: calc(250px -70px);
`;

const ScrolledStopPhoto = styled.div`
  position: ${(props) => props.cardToggle};
  display: flex;
  width: 100vw;
  height: 100%;
`;
const SmallPhotoWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 33%);
  grid-template-columns: repeat(3, 33%);
  width: 50vw;
  height: 100%;
  margin: 30px;
  overflow: none;
  grid-template-areas:
    "SmallContents SmallContents SmallContents"
    "SmallContents SmallContents SmallContents"
    "SmallContents SmallContents SmallContents";
  SmallContents {
    grid-area: SmallContents;
  }
`;

export default Main;

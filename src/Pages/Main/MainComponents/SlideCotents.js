import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import KinfolkButton from "../../../Components/Button/KinfolkButton";

export default function SlideCotents({
  BookPhoto,
  currentSlider,
  setCurrentSlider,
  nextSlide,
  PrevSlide,
  slideRef,
  TOTAL_SLIDES,
}) {
  useEffect(() => {
    if (slideRef) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        (slideRef.current.clientWidth / TOTAL_SLIDES) * currentSlider
      }px)`;
    }
  }, [TOTAL_SLIDES, currentSlider, slideRef]);

  return (
    <div>
      <SlideCotentsContainer>
        <PrevSlideButton onClick={PrevSlide} />
        <BookPhotoWrapper>
          <BookPhotoBox ref={slideRef}>
            {BookPhoto &&
              BookPhoto.map((el, index) => (
                <BookPhotoSize key={index}>
                  <img alt="slidePhoto" src={el.src} />
                </BookPhotoSize>
              ))}
          </BookPhotoBox>
        </BookPhotoWrapper>
        <NextSlideButton onClick={nextSlide} />
      </SlideCotentsContainer>
      <NotionPart>
        <span>
          From wilderness to windowsill: Plant roots in the world around you.
        </span>
        <KinfolkButton>Buy Now</KinfolkButton>
      </NotionPart>
    </div>
  );
}

const SlideCotentsContainer = styled.section`
  display: flex;
  position: relative;
  ${(props) => props.theme.setSize("100%", "70vh")}
  margin: 0 -2%;
  font-family: ${(props) => props.theme.lora};
  overflow: hidden;
`;

const PrevSlideButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 0;
  ${(props) => props.theme.setSize("50vw", "calc(100% - 40px)")}
  background-color: transparent;
  cursor: url("https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-left.svg"),
    auto;
`;

const NextSlideButton = styled(PrevSlideButton)`
  right: 0;
  cursor: url("https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-right.svg"),
    auto;
`;

const BookPhotoWrapper = styled.div`
  padding: 0 20%;
`;

const BookPhotoBox = styled.div`
  display: flex;
  overflow: hidden;
  @media only screen and (min-width: 1920px) {
    width: 23020px;
  }
  width: 17260px;
`;

const BookPhotoSize = styled.div`
  img {
    @media only screen and (min-width: 1920px) {
      width: 1151px;
    }
    width: 863px;
  }
`;

const NotionPart = styled.section`
  ${(props) => props.theme.setSize("100vw")}
  ${(props) => props.theme.setFlex("space-between", "center", "column")}

  span {
    margin: 5% 0;
    font-size: 18px;
  }

  button {
    border: 1px solid black;
    padding: 10px 30px;
  }
`;

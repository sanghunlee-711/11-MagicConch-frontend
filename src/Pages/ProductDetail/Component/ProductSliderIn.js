import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import SliderCard from "./SliderCard";

const ProductSlider = () => {
  const total = 2;
  const [nowSlide, setNowSlide] = useState(0);
  const slideRef = useRef(null);

  const nextBtn = () => {
    if (nowSlide >= total) {
      setNowSlide(0);
    } else {
      setNowSlide(nowSlide + 1);
    }
  };

  const prevBtn = () => {
    if (nowSlide === 0) {
      setNowSlide(0);
    } else {
      setNowSlide(nowSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s linear";
    slideRef.current.style.transform = `translateX(-${nowSlide}00%)`;
  }, [nowSlide]);

  return (
    <>
      <PrevBtn onClick={prevBtn}>
        <img
          src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-left.svg"
          alt="prevBtn"
        />
      </PrevBtn>
      <Slider>
        <SliderContainer>
          <SliderBox ref={slideRef}>
            {index.map((index) => {
              return <SliderCard key={index} />;
            })}
          </SliderBox>
        </SliderContainer>
      </Slider>
      <NextBtn onClick={nextBtn}>
        <img
          src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-right.svg"
          alt="nextBtn"
        />
      </NextBtn>
    </>
  );
};

export default ProductSlider;

const index = [0, 1, 2];

const Slider = styled.div`
  ${(props) => props.theme.setSize("60%", null)}
`;

const BtnWrap = styled.div`
${(props) => props.theme.setSize("100%", "100%")}
  position: absolute;
  left: 0;
  top: 0;
`;

const PrevBtn = styled.div`
  ${(props) => props.theme.setSize("20%", "24px")}
  ${(props) => props.theme.setFlex("center", "center", null)}
  z-index: 1;
  background: transparent;

  img {
    ${(props) => props.theme.setSize("14px", "24px")}
    opacity: 0.9;
    cursor: pointer;
  }
`;

const NextBtn = styled.div`
  ${(props) => props.theme.setSize("20%", "24px")}
  ${(props) => props.theme.setFlex("center", "center", null)}
  z-index: 1;
  background: transparent;

  img {
    ${(props) => props.theme.setSize("14px", "24px")}
    opacity: 0.9;
    cursor: pointer;
  }
`;

const SliderContainer = styled.div`
  ${(props) => props.theme.setSize("100%", null)}
  overflow: hidden;
  position: relative;

  .zoomImg {
    ${(props) => props.theme.setSize("45px", "45px")}
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0;
    z-index: 99;
    transition: opacity linear 250ms;
    background-image: url(https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/expand.svg);
    cursor: pointer;
  }

  &:hover .zoomImg {
    opacity: 1;
  }
`;

const SliderBox = styled.div`
  ${(props) => props.theme.setSize("100%", null)}
  display: flex;
  background-color: #f2f2f2;
`;

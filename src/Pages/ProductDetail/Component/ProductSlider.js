import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import SliderCard from "./SliderCard";
import ProductModal from "./ProductModal";

const ProductSlider = ({ imgList }) => {
  const TOTAL = imgList.length - 1;
  const slideRef = useRef(null);
  const [nowSlide, setNowSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextBtn = () => setNowSlide(nowSlide >= TOTAL ? 0 : nowSlide + 1);

  const prevBtn = () => setNowSlide(!nowSlide ? 0 : nowSlide - 1);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${nowSlide}00%)`;
  }, [nowSlide]);

  return (
    <>
      <ProductModal
        isModalOpen={isModalOpen}
        close={closeModal}
        imgList={imgList}
      />
      <Slider>
        <SliderContainer>
          <BtnWrap>
            <PrevBtn onClick={prevBtn} />
            <NextBtn onClick={nextBtn} />
          </BtnWrap>
          <SliderBox ref={slideRef} num={nowSlide}>
            {imgList.map((el, index) => {
              return <SliderCard key={index} imageURL={el} />;
            })}
          </SliderBox>
          <div className="zoomImg" onClick={openModal} />
        </SliderContainer>
      </Slider>
    </>
  );
};

export default ProductSlider;

const Slider = styled.div`
  ${(props) => props.theme.setSize("70%", null)}
  margin-right: 35px;
`;

const BtnWrap = styled.div`
  ${(props) => props.theme.setSize("100%", "100%")}
  position: absolute;
  left: 0;
  top: 0;
`;

const PrevBtn = styled.div`
  ${(props) => props.theme.setSize("50%", "100%")}
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: transparent;
  cursor: url(https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-left.svg),
    e-resize;
`;

const NextBtn = styled.div`
  ${(props) => props.theme.setSize("50%", "100%")}
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  background: transparent;
  cursor: url(https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/chevron-right.svg),
    e-resize;
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
  ${(props) => props.theme.setSize("100%", null)};
  display: flex;
  background-color: #f2f2f2;
`;

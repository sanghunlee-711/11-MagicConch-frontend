import React from "react";
import styled, { css } from "styled-components";
import ProductSliderIn from "./ProductSliderIn";

const ProductModal = ({ isModalOpen, close, imgList }) => {
  return (
    <>
      {isModalOpen && (
        <ModalWrap>
          <ModalBox>
            <ModalHeader>
              <CountBox>1 of {imgList.length}</CountBox>
              <CloseBox onClick={close}>
                <img src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/themes/kinfolk2020/assets/img/icons/svg/close.svg" />
              </CloseBox>
            </ModalHeader>
            <SliderIn>
              <ProductSliderIn imgList={imgList} />
            </SliderIn>
          </ModalBox>
        </ModalWrap>
      )}
    </>
  );
};

export default ProductModal;

const ModalWrap = styled.div`
  ${(props) => props.theme.setSize("100%", "100%")}
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
`;

const ModalBox = styled.section`
  ${(props) => props.theme.setSize("100%", "100%")}
  position: relative;
  left: 0;
  top: 0;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  ${(props) => props.theme.setSize("100%", "60px")}
  ${(props) =>
    props.theme.setFlex("space-between", "center", "row")}
  position: absolute;
  background-color: transparent;
`;

const CountBox = styled.div`
  ${(props) => props.theme.setSize(null, "60px")}
  height: 60px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.75;
  padding: 0 10px;
  margin-left: 10px;
  font-size: 15px;
  line-height: 60px;
  color: #000;
`;

const CloseBox = styled.button`
  ${(props) => props.theme.setSize("50px", "60px")}
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 0 10px;
  margin-right: 10px;
  opacity: 0.9;
  cursor: pointer;

  img {
    ${(props) => props.theme.setSize("20px", "20px")}
    opacity: 0.8;
    transition: 0.3s;
  }

  :hover img {
    opacity: 1;
    transform: rotate(90deg);
  }
`;

const SliderIn = styled.div`
  ${(props) => props.theme.setSize("100%", "100%")}
  ${(props) => props.theme.setFlex("center", "center", null)}
`;

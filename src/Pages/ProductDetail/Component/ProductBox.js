import React, { Component } from "react";
import styled, { css } from "styled-components";
import ProductSlider from "./ProductSlider";

class ProductBox extends Component {
  render() {
    const {
      productInfo,
      isClick,
      isName,
      handleDetailBtnEvent,
      clickAddBasketBtn,
      buttonText,
    } = this.props;
    return (
      <DetailWrap>
        <DetailBox>
          <ProductSlider imgList={productInfo.inner_imgae_url} />
          <DetailText>
            <ProductText>
              <h2>{productInfo.inner_tag}</h2>
              <h5>
                <span>${productInfo.price}</span>
              </h5>
              <p>{productInfo.inner_description}</p>
            </ProductText>
            <ProductAccordion>
              <dt onClick={() => handleDetailBtnEvent("detail")}>
                <span>DETAILS</span>
              </dt>
              <Minintext isClick={isClick} isName={isName} name={"detail"}>
                <p>{productInfo.inner_details}</p>
              </Minintext>
              <dt onClick={() => handleDetailBtnEvent("shopping")}>
                <span>SHIPPING + HANDLING</span>
              </dt>
              <Minintext isClick={isClick} isName={isName} name={"shopping"}>
                <p>{productInfo.inner_shipping_handling}</p>
              </Minintext>
            </ProductAccordion>
            <QuantitySelect>
              <select name="quantity" onChange={this.props.clickSelectBox}>
                {OPTION_NUMBER.map((el, index) => {
                  return (
                    <option value={index} key={index}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </QuantitySelect>
            <AddBasketBtn>
              <button type="submit" onClick={clickAddBasketBtn}>
                {buttonText}
              </button>
            </AddBasketBtn>
          </DetailText>
        </DetailBox>
      </DetailWrap>
    );
  }
}

export default ProductBox;

const OPTION_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const DetailWrap = styled.section`
  margin-bottom: 70px;
`;

const DetailBox = styled.div`
  ${(props) => props.theme.setFlex("space-between", null, "row")}
`;

const DetailText = styled.div`
  width: 33.3%;
  ${(props) => props.theme.setFlex(null, null, "column")}
`;

const ProductText = styled.div`
  h2 {
    font-size: 38px;
  }

  h5 {
    font-size: 21px;
    margin-bottom: 30px;
  }

  p {
    ${(props) => props.theme.setSize("95%")}
    width: 95%;
    margin-bottom: 45px;
    font-size: 14px;
    line-height: 25px;
  }
`;

const ProductAccordion = styled.div`
  margin-bottom: 20px;

  dt{
    display: block;
    margin: 0;
    padding: 15px 0;
    border-top: 1px solid #333;
    cursor: pointer;
    
    span{
      font-size: 15px;
      color: #4d4d4d;
      letter-spacing: 1px;
      opacity: 1;
      text-transform: uppercase;
      transition: opacity 200ms linear;

    }

    &::after{
      content: '+';
      float: right;
      font-size: 20px;
      margin-top: -3px;
    }

    &:hover span{
      opacity: 0.5;
    }
  }
}`;

const Minintext = styled.dd`
  ${(props) =>
    props.isClick && props.isName === props.name
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
  transition: display 0.3s;
  padding: 20px 0;
`;

const QuantitySelect = styled.div`
  margin-bottom: 20px;

  select {
    ${(props) => props.theme.setSize("100%", "48px")}
    padding: 8px;

    option {
      background-color: #f3eeea;
    }
  }
`;

const AddBasketBtn = styled.div`
  button {
    ${(props) => props.theme.setSize("100%", "53px")}
    background-color: transparent;
    border: 1px solid #000;
    font-size: 20px;
    color: #000;
    padding: 15px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

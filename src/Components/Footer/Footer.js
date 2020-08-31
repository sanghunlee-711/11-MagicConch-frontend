import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterContents>
        <FooterContainer>
          <FooterLeftTitle>
            <ul>
              <span>© Kinfolk 2020</span>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/productList">Subscribe</Link>
              </li>
            </ul>
          </FooterLeftTitle>
          <div>
            <FooterSnsTitle>
              <li>
                <a
                  alt="FactbookLink"
                  href="https://www.facebook.com/kinfolkmag"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a alt="TwitterLink" href="https://twitter.com/kinfolkmag">
                  Twitter
                </a>
              </li>
              <li>
                <a
                  alt="InstargramLink"
                  href="https://www.instagram.com/kinfolk/"
                >
                  Instargram
                </a>
              </li>
            </FooterSnsTitle>
          </div>
          <span>
            <a href="https://www.madebysix.com/">
              Website design & development by Six
            </a>
          </span>
        </FooterContainer>
      </FooterContents>
    );
  }
}

const footerHover = css`
  &:link,
  &:visited,
  &:active {
    color: black;
  }

  &:hover {
    transition: ease 250ms color;
    color: #999999;
  }
`;

const listMargin = css`
  margin-right: 35px;
`;

const setSize = (width, height = null) => css`
  width: ${width};
  height: ${height};
`;

const setFlex = (justify, align, direction) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;

const FooterContents = styled.footer`
  position: fixed;
  bottom: 120px;
  ${setSize("100vw")}
  margin-top: 220px;
  padding: 0 3.3%;
  font-size: 37px;
  font-weight: 400;
  a {
    ${footerHover};
  }
`;

const FooterContainer = styled.section`
  ul {
    ${setFlex()}
  }
  ${setFlex("space-between")}
  padding-top: 30px;
  border-top: 10px solid black;
  line-height: 1.4;
`;

const FooterLeftTitle = styled.div`
  span {
    ${listMargin};
  }
  ul {
    li:nth-child(2) {
      ${listMargin};
    }
  }
`;

const FooterSnsTitle = styled.ul`
  ${setFlex()}
  li {
    ${listMargin};
  }
`;

export default Footer;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterContents>
        <FooterContainer>
          <KinfolkTitle>
            <ul>
              <span>© Kinfolk 2020</span>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/productList">Subscribe</Link>
              </li>
            </ul>
          </KinfolkTitle>
          <div>
            <SnsLink>
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
            </SnsLink>
          </div>
          <WebDesign>
            <a href="https://www.madebysix.com/">
              Website design & development by Six
            </a>
          </WebDesign>
        </FooterContainer>
      </FooterContents>
    );
  }
}

const listMargin = css`
  margin-right: 30px;
`;

const FooterContents = styled.footer`
  position: fixed;
  bottom: 0;
  ${(props) => props.theme.setSize("100vw")}
  margin-top: 220px;
  padding: 0 2.5%;
  font-size: 16px;
  font-weight: 600;
  a {
    ${(props) => props.theme.footerHover};
  }
`;

const FooterContainer = styled.section`
  ul {
    ${(props) => props.theme.setFlex()}
  }
  ${(props) => props.theme.setFlex("space-between")}
  padding: 1% 0 2.5% 0;
  border-top: 3px solid black;
  line-height: 1.4;
`;

const KinfolkTitle = styled.div`
  span {
    ${listMargin};
  }
  ul {
    li:nth-child(2) {
      ${listMargin};
    }
  }
`;

const SnsLink = styled.ul`
  ${(props) => props.theme.setFlex()}
  li {
    ${listMargin};
  }
`;

const WebDesign = styled.span`
  letter-spacing: 1.5px;
`;

export default Footer;

import React, { Component } from "react";
import styled, { css } from "styled-components";

class Category extends Component {
  state = {
    activeTab: 0,
  };

  handleTab = (index) => {
    this.setState({
      activeTab: index,
    });
  };

  render() {
    const { data } = this.props;
    return (
      <TabBox>
        <TabList>
          <li>SHOP:</li>
          {CATEGORY_DATA.map((el, index) => {
            return (
              <Tabitem
                key={index}
                onClick={() => this.handleTab(index)}
                activeTab={this.state.activeTab}
                index={index}
                name={el.name}
              >
                {el.title}
              </Tabitem>
            );
          })}
        </TabList>
      </TabBox>
    );
  }
}

export default Category;

const CATEGORY_DATA = [
  { title: "ALL", name: "ALL" },
  { title: "ART PRINTS", name: "ART PRINTS" },
  { title: "BOOKS", name: "BOOKS" },
  { title: "MAGAZINE", name: "MAGAZINE" },
  { title: "SUBSCRIPTIONS", name: "SUBSCRIPTIONS" },
];

const TabBox = styled.div`
  ${(props) => props.theme.setFlex("center", "center", null)}
  padding-top: 150px;
  padding-bottom: 80px;
`;

const TabList = styled.ul`
  ${(props) => props.theme.setFlex(null, null, "row")}

  li {
    
    font-size: 13px;
    font-weight: normal;
    letter-spacing: 1.5px;
    line-height: 15px;
    color: #4d4d4d;
    margin-right: 20px;
    cursor: pointer;

    &:first-child {
      cursor: default;
    }
  }
`;

const Tabitem = styled.li`
  padding-bottom: 3px;
  border-bottom: ${(props) =>
    props.activeTab === props.index ? "1px solid #333;" : ""};
`;

import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CardContents from "../Main/MainComponents/CardContents";
import Nav from "../../Components/Nav/DefaultNav";
import Footer from "../../Components/Footer/Footer";

function Search(props) {
  const [data, setData] = useState([]);
  const { search } = useParams();
  const SearchedWord = search;
  const SearchGetData = data?.search_results;
  const ShopData = SearchGetData && SearchGetData[0];
  const CategoryData = SearchGetData && SearchGetData[1];

  // const FilterContents = useCallback(
  //   (res) => {
  //     const DesignData = res.Design;
  //     setData(
  //       DesignData?.filter(
  //         ({ tag, title, description }) =>
  //           tag.includes(SearchedWord) ||
  //           title.includes(SearchedWord) ||
  //           description.includes(SearchedWord)
  //       )
  //     );
  //   },
  //   [SearchedWord]
  // );

  // useEffect(() => {
  //   fetch("/data/mainMockdata.json")
  //     .then((res) => res.json())
  //     .then((res) => FilterContents(res));
  // }, [FilterContents]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/search/${search}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [search]);

  return (
    <section>
      <Nav />
      <ResultWord>
        <div>
          <span>{SearchedWord}</span>
          <span>{ShopData?.length + CategoryData?.length} Result</span>
        </div>
      </ResultWord>
      <ResultItem>
        {ShopData?.map(
          ({
            id,
            inner_tag,
            inner_description,
            outer_tag,
            outer_image_url,
          }) => (
            <CardContents
              key={id}
              width="16%"
              minWidth="300px"
              height="668.938px"
              padding="0 2.5%"
              borderLeft="1px solid black"
              src={outer_image_url}
              issue={outer_tag}
              title={inner_tag}
              explanation={inner_description}
            />
          )
        )}
        {CategoryData?.map(({ id, title, description, tag, image_url }) => (
          <CardContents
            key={id}
            width="16%"
            minWidth="300px"
            height="668.938px"
            padding="0 2.5%"
            borderLeft="1px solid black"
            src={image_url.slice(1, -1)}
            issue={tag}
            title={title}
            explanation={description}
          />
        ))}
      </ResultItem>
      <Footer />
    </section>
  );
}

export default Search;

const ResultWord = styled.div`
  padding-bottom: calc(0.0375 * 100vw + 20px);
  padding-top: calc(0.04063 * 100vw + 25px);

  div {
    ${(props) => props.theme.setFlex("center", "center", "column")}

    span {
      font-size: 4.375rem;

      &:nth-child(2) {
        font-size: 1rem;
      }
    }
  }
`;

const ResultItem = styled.section`
  ${(props) => props.theme.setFlex("flex-start")}
  flex-wrap: wrap;
  width: 100vw;
  margin-bottom: 80px;
`;

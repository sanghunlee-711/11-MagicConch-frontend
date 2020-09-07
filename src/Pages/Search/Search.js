import React, { useEffect, useState, useCallback } from "react";
import { withRouter, useParams } from "react-router-dom";
import styled from "styled-components";
import CardContents from "../Main/MainComponents/CardContents";

function Search(props) {
  const [data, setData] = useState([]);
  const { search } = useParams();
  const SearchedWord = search;

  const FilterContents = useCallback(
    (res) => {
      const DesignData = res.DesignMock;
      setData(
        DesignData.filter(
          ({ tag, title, description }) =>
            tag.includes(SearchedWord) ||
            title.includes(SearchedWord) ||
            description.includes(SearchedWord)
        )
      );
    },
    [SearchedWord]
  );

  useEffect(() => {
    fetch("/data/mainMockdata.json")
      .then((res) => res.json())
      .then((res) => FilterContents(res));
  }, [FilterContents]);

  return (
    <section>
      <ResultWord>
        <div>
          <span>{SearchedWord}</span>
          <span>{data.length} Result</span>
        </div>
      </ResultWord>
      <ResultItem>
        {data &&
          data.map((el) => (
            <CardContents
              width="16%"
              minWidth="300px"
              height="668.938px"
              padding="0 2.5%"
              borderLeft="1px solid black"
              src="https://24hkto1dz1v3ddyf93n0ye45-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/mutina_build_01-793x1024-350x452.jpg"
              issue={el.tag}
              title={el.title}
              explanation={el.description}
            />
          ))}
      </ResultItem>
    </section>
  );
}

export default withRouter(Search);

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
`;

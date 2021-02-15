import React from "react";
import styled from "styled-components";
import ResultComponent from "../component/result/ResultComponent";
import ShareContainer from "./ShareContainer";
import results from "../data/results.json";

export default function ResultContainer({ char, tag }) {
  const color = results[char][tag].color;
  return (
    <StyledResult color={color}>
      <ResultComponent character={char} tag={tag} />
      <ShareContainer char={char} tag={tag} />
    </StyledResult>
  );
}
const StyledResult = styled.div`
  background-color: ${(prop) => prop.color};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

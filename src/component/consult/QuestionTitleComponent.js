import React from "react";
import { useTotalCount } from "../../QuestionContext";
import styled from "styled-components";
import { titles } from "../../setDate";

export default function QuestionTitleComponent() {
  let totalCount = useTotalCount();
  return (
    <QuestionTitleStyled>
      <h2>{titles[totalCount - 1]}</h2>
    </QuestionTitleStyled>
  );
}

const QuestionTitleStyled = styled.div`
  padding: 1rem;
  margin-top: 8.4rem;
  background: #f5c6c6;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    padding: 12.5rem 1rem;
    text-align: center;
  }

  .question-title {
    color: #222;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 100px;
    height: 40px;
  }

  /* &.active {
    display: block;
    opacity: 1;
  } */
`;

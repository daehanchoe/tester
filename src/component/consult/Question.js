import React from "react";
import styled from "styled-components";
import { getType } from "../../units";
import { list } from "../../setDate";
import { useTotalCount } from "../../QuestionContext";
import QuestionComponent from "./QuestionComponent";
import SituationComponent from "./SituationComponent";
export default function Question() {
  let id = useTotalCount() - 1;
  return (
    <StyledQuestion>
      {getType(list[id]) === "situation" ? (
        <SituationComponent />
      ) : (
        <QuestionComponent />
      )}
    </StyledQuestion>
  );
}

const StyledQuestion = styled.div`
  padding: 0 0.1rem;
  margin-bottom: 4.2rem;
  background-color: white;
`;

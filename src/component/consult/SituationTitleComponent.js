import React from "react";
import { useTotalCount } from "../../QuestionContext";
import styled from "styled-components";
import { titles } from "../../setDate";

export default function SituationComponent() {
  let totalCount = useTotalCount();
  return (
    <SituationStyled>
      <h2>{titles[totalCount - 1]}</h2>
    </SituationStyled>
  );
}

const SituationStyled = styled.div`
  img {
    width: 100%;
  }
`;

import React from "react";
import styled from "styled-components";
import Title from "../../component/consult/Title";
import Question from "../../component/consult/Question";

export default function Main() {
  return (
    <StyledMain>
      <Title />
      <Question />
    </StyledMain>
  );
}

const StyledMain = styled.div`
  /* box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 4px -1px; */
`;

import React from "react";
// import styled from "styled-components";
// import Counter from "../layouts/ConsultLayout/Counter";
import QuestionContainer from "../container/QuestionContainer";
import QuestionProvider from "../QuestionContext";
export default function Consult() {
  return (
    <QuestionProvider>
      <QuestionContainer />
    </QuestionProvider>
  );
}

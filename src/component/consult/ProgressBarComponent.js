import React from "react";
import { ProgressBar } from "react-bootstrap";
import { useTotalCount } from "../../QuestionContext";
import { totalListCount } from "../../data/cosultListMeta";
import styled from "styled-components";
export default function ProgressBarComponent(props) {
  let background = props.background;
  let totalCount = useTotalCount();
  const percent = (totalCount / totalListCount) * 100;
  return (
    <StyledProgressBar background={background}>
      <ProgressBar now={percent} />
    </StyledProgressBar>
  );
}

const StyledProgressBar = styled.div`
  width: 85%;
  padding-top: 0.2rem;
  padding-right: 0.5rem;

  .progress {
    background: #d8d8d8 !important;
    border-radius: 15px;
  }
  .progress-bar {
    background: ${(prop) => prop.background} !important;
  }
`;

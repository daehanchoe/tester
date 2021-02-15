import React from "react";
import styled from "styled-components";
import ProgressBarComponent from "../../component/consult/ProgressBarComponent";

export default function Counter(prop) {
  const total = prop.total;
  const count = prop.totalCount;
  let color = prop.color;
  let background = prop.background;

  return (
    <HeaderComp color={color} background={background}>
      <ProgressBarComponent background={background} />

      {/* TODO Progress bar */}
      {/* <p className="current-question">
        <span>Q</span>
        <span>{count}</span>
      </p> */}
      <span className="total-question">
        {count}/{total}
      </span>
    </HeaderComp>
  );
}

const HeaderComp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* 
  .current-question span {
    float: left;
    color: #35c5f0;
    font-weight: bold;
  }

  .current-question span:first-child {
    font-size: 30px;
  }

  .current-question span:last-child {
    font-size: 29px;
    margin-top: 2px;
    margin-left: 4px;
  } */

  .total-question {
    height: 1.5rem;
    width: 4rem;
    border-radius: 17px;
    background: ${(prop) => prop.background};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(prop) => prop.color};
    font-size: 14px;
    letter-spacing: 3px;
    padding-left: 0.2rem;
  }
`;

import React from "react";
import styled from "styled-components";
import { getType } from "../../units";
import { list } from "../../setDate";
import { useTotalCount, useSetTotalCount } from "../../QuestionContext";
import AdfitWebComponent from "react-adfit-web-component";

export default function Footer() {
  let totalCount = useTotalCount();
  let id = totalCount - 1;
  const setTotalCount = useSetTotalCount();

  return (
    <StyledFooter>
      {getType(list[id]) === "situation" && (
        <button
          onClick={() => {
            setTotalCount(totalCount + 1);
          }}
        >
          섹션 시작하기
        </button>
      )}
      <AdfitWebComponent adUnit="DAN-9ssamzcmfe3dsvba" />
    </StyledFooter>
  );
}
// TODO style 분리
const StyledFooter = styled.footer`
  background: #edebeb;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  position: fixed !important;
  bottom: 0;
  height: 4.2em;
  background: rgb(248, 248, 248);
  border-top: 0.5px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.5) 0px -5px 7px -5px;
  z-index: 1000;
  button {
    min-width: 100%;
    min-height: 100%;
    background: #0f0f0f;
    color: #fff;
    z-index: 10000;
  }
`;

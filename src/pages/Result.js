// import React from 'react';
import React, { useEffect, useRef, useState } from "react";
import ResultContainer from "../container/ResultContainer";
import loading from "../assets/loading.gif";
import styled from "styled-components";

export default function Result({ location }) {
  const [resultDisplay, setResultDisplay] = useState("none");
  const [loadingDisplay, setLoadingDisplay] = useState("flex");
  const resultDivRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setResultDisplay("flex");
      setLoadingDisplay("none");
    }, 3500);
    // useEffact는 render가 완료된 이후 react에서 자체적인 실행을 함. -> javascript 구문, react 구문 아님.
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true; // 동기화
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: resultDivRef.current.offsetTop,
    });
  }, []);

  let selected_char = location.state.selected_char;
  let tag = location.state.tag;
  return (
    <ResultStyled resultDisplay={resultDisplay} loadingDisplay={loadingDisplay}>
      <div className="loading">
        <img src={loading} alt="alt" />
      </div>
      <div className="result" ref={resultDivRef}>
        <ResultContainer char={selected_char} tag={tag} />
      </div>
    </ResultStyled>
  );
}

const ResultStyled = styled.div`
  .result {
    display: ${(props) => props.resultDisplay};
    min-height: 100vh;
  }
  .loading {
    display: ${(props) => props.loadingDisplay};
    background: white;
    width: 100%;
    height: 100%;
    padding: 60% 0px;
    justify-content: center;
    align-items: flex-end;
  }
  .loading img {
    width: 300px;
    height: 300px;
  }
`;

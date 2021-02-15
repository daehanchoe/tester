import React, { useEffect } from "react";
import qs from "qs";
import ResultContainer from "../container/ResultContainer";

export default function CopyResult({ location }) {
  useEffect(() => {
    // useEffact는 render가 완료된 이후 react에서 자체적인 실행을 함. -> javascript 구문, react 구문 아님.
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true; // 동기화
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const char = query.char;
  const tag = query.tag;

  return <ResultContainer char={char} tag={tag} />;
}

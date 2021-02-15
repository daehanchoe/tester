import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext([]);
const SetResultContext = createContext(() => {});
const TotalCountContext = createContext(1);
const SetTotalCountContext = createContext(() => {});
const QuestionCountContext = createContext(1);
const SetQuestionCountContext = createContext(() => {});
export default function QuestionProvider({ children }) {
  const [result, setResult] = useState([]); // result에게 데이터를 넘겨주려고 사용.
  //   totalCount(22), 다음으로 버튼을 누르면 올라가게
  const [totalCount, setTotalCount] = useState(1); // 함수형 컴포넌트를 사용하는 방식.(hook) : count=useState(1), setCount는 밑에서 추가
  //   questionAndTag(15), handleClick 변수 i 값
  const [questionCount, setQuestionCount] = useState(1); // 함수형 컴포넌트를 사용하는 방식.(hook) : count=useState(1), setCount는 밑에서 추가

  return (
    <SetTotalCountContext.Provider value={setTotalCount}>
      <SetQuestionCountContext.Provider value={setQuestionCount}>
        <SetResultContext.Provider value={setResult}>
          <ResultContext.Provider value={result}>
            <TotalCountContext.Provider value={totalCount}>
              <QuestionCountContext.Provider value={questionCount}>
                {children}
              </QuestionCountContext.Provider>
            </TotalCountContext.Provider>
          </ResultContext.Provider>
        </SetResultContext.Provider>
      </SetQuestionCountContext.Provider>
    </SetTotalCountContext.Provider>
  );
}

export function useResultState() {
  const result = useContext(ResultContext);
  if (!result) {
    throw new Error("Cannot find UsersProvider");
  }
  return result;
}

export function useSetResult() {
  const result = useContext(SetResultContext);
  if (!result) {
    throw new Error("Cannot find UsersProvider");
  }
  return result;
}

export function useTotalCount() {
  const result = useContext(TotalCountContext);
  if (!result) {
    throw new Error("Cannot find UsersProvider");
  }
  return result;
}

export function useSetTotalCount() {
  const result = useContext(SetTotalCountContext);
  if (!result) {
    throw new Error("Cannot find UsersProvider");
  }
  return result;
}

export function useQuestionCount() {
  const result = useContext(QuestionCountContext);
  if (!result) {
    throw new Error("Cannot find UsersProvider");
  }
  return result;
}

export function useSetQuestionCount() {
  const result = useContext(SetQuestionCountContext);
  if (!result) {
    throw new Error("Cannot find UsersProvider");
  }
  return result;
}

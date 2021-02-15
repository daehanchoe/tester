import React from "react";
import { titles, types } from "../../setDate";
import Counter from "../../layouts/ConsultLayout/Counter";
import { totalListCount } from "../../data/cosultListMeta";
import { useTotalCount } from "../../QuestionContext";
import styled from "styled-components";

export default function Title() {
  let totalCount = useTotalCount();
  return (
    <TitleStyled>
      {types[totalCount - 1] === "situation" ? (
        <SituationTitleStyled
          img={require("../../assets/images/situations/situation_" +
            totalCount +
            ".jpg")}
        >
          <div className="h2-div">
            <h2>
              {titles[totalCount - 1].split("\n").map((line, _) => (
                <span key={_}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
          </div>
          <Counter
            totalCount={totalCount}
            total={totalListCount}
            color="#000"
            background="#fff"
          />
        </SituationTitleStyled>
      ) : (
        <QuestionTitleStyled>
          <div className="h2-div">
            <h2>
              {titles[totalCount - 1].split("\n").map((line, _) => (
                <span key={_}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
          </div>
          <Counter
            totalCount={totalCount}
            total={totalListCount}
            color="#fff"
            background="#000"
          />
        </QuestionTitleStyled>
      )}
    </TitleStyled>
  );
}
//

const TitleStyled = styled.div`
  margin-top: 8.4rem;
  background-color: white;
  width: 100%;
  /* height: 100%; */
  /* height: ${(prop) => prop.width + "px"}; */
  position: relative;

  line-height: initial;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  h2 {
    line-height: 160%;
  }
`;

const SituationTitleStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  padding: 1rem;
  /* 이미지 동적 할당 */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  /* background: url("https://mdn.mozillademos.org/files/7693/catfront.png"); */
  /* background-image: url("../../../assets/images/situations/situation_1.png"); */
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .h2-div {
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: center;
  }

  h2 {
    /* padding: 12.5rem 1rem; */
    text-align: center;
    color: white;
  }
`;

// TODO style 분리
const QuestionTitleStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  padding: 1rem;
  background: #fcf4e1;
  /* min-height: 500px; */
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .h2-div {
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: center;
  }

  h2 {
    /* padding: 12.5rem 1rem; */
    text-align: center;
  }

  .question-title {
    color: #222;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 100px;
    height: 40px;
  }
`;

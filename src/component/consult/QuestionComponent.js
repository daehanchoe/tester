import React, { useState } from "react";
import styled from "styled-components";
import * as context from "../../QuestionContext";
import { list } from "../../setDate";
import { questionAndTagListCount } from "../../data/cosultListMeta";
import { getType } from "../../units";
import empty_heart_icon from "../../assets/icons/empty_heart_icon.svg";
import filled_heart_icon from "../../assets/icons/filled_heart_icon.svg";
import { useHistory } from "react-router-dom";
import { postResult } from "../../api";
import ReactTouchEvents from "react-touch-events";

export default function QuestionComponent() {
  let totalCount = context.useTotalCount();
  const id = totalCount - 1;
  const setTotalCount = context.useSetTotalCount();
  const questionCount = context.useQuestionCount();
  const setQuestionCount = context.useSetQuestionCount();
  const result = context.useResultState();
  const setResult = context.useSetResult();
  const history = useHistory();

  function setReusultAndIncreaseId(data) {
    if (questionCount === questionAndTagListCount) {
      result[14] = data;
      setResult(result.concat());
      // >>>>>>>>>>>>>>>FIXME: seperate this code<<<<<<<<<<<<<<
      // >>>>>>>>>>>>>>>NOTE: (start) count and get character<<<<<<<<<<<<<<
      let extrovert = 0; // 내외향성
      let open = 0; // 개폐쇄성

      let cnt = 1;
      let tag = "";
      let selected_char = "";

      for (let num of result) {
        if (cnt !== 15) {
          if (cnt % 2 !== 0) extrovert = extrovert + num;
          else if (cnt % 2 === 0) open = open + num;
        } else {
          tag = num;
        }
        cnt++;
      }

      // 내외향성 // 개폐쇄성
      if (extrovert < 0 && open < 0) {
        selected_char = "Buddy";
      } else if (extrovert < 0 && open > 0) {
        selected_char = "Tommy";
      } else if (extrovert > 0 && open < 0) {
        selected_char = "Wigo";
      } else if (extrovert > 0 && open > 0) {
        selected_char = "Willy";
      }
      // >>>>>>>>>>>>>>>(end) count and get character<<<<<<<<<<<<<<

      // >>>>>>>>>>>>>>>NOTE: call api to post result<<<<<<<<<<<<<<
      const resultArray = result.slice(0, result.length - 1);
      postResult(resultArray, tag, selected_char, extrovert, open);

      // >>>>>>>>>>>>>>>NOTE: history push to result page<<<<<<<<<<<<<<
      history.push({
        pathname: "/result",
        state: { selected_char: selected_char, tag: tag },
      });
    } else if (questionCount < questionAndTagListCount) {
      result[questionCount - 1] = data;
      setResult(result.concat());
      setTotalCount(totalCount + 1); // 22가되면 끝나야돼
      setQuestionCount(questionCount + 1);
    }
  }

  return (
    <QuestionStyled>
      {getType(list[id]) === "question" ? (
        <ul>
          <ReactTouchEvents onTap={() => setReusultAndIncreaseId(1)}>
            <li>
              <p>
                {list[id].content.multipleChoice[0]
                  .split("\n")
                  .map((line, _) => (
                    <span key={_}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
              <span className="empty-heart">
                <img src={empty_heart_icon} alt="heart" />
              </span>
              <span className="fill-heart">
                <img src={filled_heart_icon} alt="heart" />
              </span>
            </li>
          </ReactTouchEvents>
          <ReactTouchEvents onTap={() => setReusultAndIncreaseId(-1)}>
            <li>
              <p>
                {list[id].content.multipleChoice[1]
                  .split("\n")
                  .map((line, _) => (
                    <span key={_}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
              <span className="empty-heart">
                <img src={empty_heart_icon} alt="heart" />
              </span>
              <span className="fill-heart">
                {/* <FontAwesomeIcon icon={faHeart} /> */}
                <img src={filled_heart_icon} alt="heart" />
              </span>
            </li>
          </ReactTouchEvents>
        </ul>
      ) : (
        <ul>
          {list[id].content.multipleChoice.map((tag, number) => (
            <ReactTouchEvents
              onTap={() => setReusultAndIncreaseId(number)}
              key={number}
            >
              <li>
                <p>{tag}</p>
                <span className="fill-heart">
                  {/* <FontAwesomeIcon icon={faHeart} /> */}
                  <img src={filled_heart_icon} alt="heart" />
                </span>
                <span className="empty-heart">
                  <img src={empty_heart_icon} alt="icon" />
                </span>
              </li>
            </ReactTouchEvents>
          ))}
        </ul>
      )}
    </QuestionStyled>
  );
}

var QuestionStyled = styled.div`
  li {
    width: 100%;
    height: 70px;
    background: #fff;
    padding: 1em;
    align-items: center;
    color: #000;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
  li p {
    line-height: 140%;
  }
  li > .fill-heart {
    display: none;
  }
  li > .empty-heart > img {
    display: inherit;
  }
  li:active > .fill-heart {
    display: inherit;
  }
  li img {
    width: 20px;
    height: 18px;
  }
  li:active > .empty-heart {
    display: none;
  }
  li:active > .fill-heart {
    display: inherit;
  }
`;

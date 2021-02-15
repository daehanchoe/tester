import React, { useState } from "react";
import results from "../../data/results.json";
import styled from "styled-components";
import ModalComponent from "./ModalComponent";
import modal_btn from "../../assets/images/result_modal_btn.png";
import tri_l from "../../assets/icons/triangle_l.svg";
import tri_r from "../../assets/icons/triangle_r.svg";
export default function ResultComp({ character, tag }) {
  const location = results[character][tag].location;
  const text = results[character][tag].text;
  const icon = require("../../assets/location_icons/" +
    results[character][tag].icon +
    ".svg");
  const image = require("../../assets/result-icon/" +
    results[character][tag].image +
    ".svg");
  const [show, setShow] = useState(false);
  return (
    <>
      <StyledProgressComponent>
        <div></div>
      </StyledProgressComponent>
      <StyledResultComponent>
        <div className="header">
          <p style={{ fontSize: "14pt" }}>나의 여행지 유형은?</p>
          {/* <img src={comp_img} alt="alt" /> */}
          <div className="location">
            <img
              src={icon}
              alt="alt"
              style={{ width: "36px", marginRight: "1rem" }}
            />
            <span>{location}</span>
          </div>
        </div>
        <div className="image">
          <img src={image} style={{ height: "150px" }} alt="alt" />
        </div>
        <div className="text">
          {text.split("\n").map((line, _) => (
            <span key={_}>
              {line}
              <br />
            </span>
          ))}
        </div>
        <div className="modal-btn">
          <button onClick={() => setShow(true)}>
            <span id="left">
              <img id="triangle" src={tri_l} alt="alt" />
            </span>
            <img src={modal_btn} alt="alt" />
            <span id="right">
              <img id="triangle" src={tri_r} alt="alt" />
            </span>
          </button>
        </div>
      </StyledResultComponent>
      <ModalComponent
        show={show}
        onHide={() => setShow(false)}
        character={character}
      />
    </>
  );
}

const StyledProgressComponent = styled.div`
  margin: 2rem 0;
  width: 90%;
  height: 1rem;
  background-color: #d4d4d4;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  div {
    border-radius: 0.5rem;
    display: inline-block;
    width: 80%;
    height: 1rem;
    position: relative;
    background-color: #ffffff;
  }
`;

const StyledResultComponent = styled.div`
  @keyframes arrowToLeft {
    50% {
      transform: translateX(-10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(-10px);
      opacity: 0;
    }
  }
  @keyframes arrowToRight {
    50% {
      transform: translateX(10px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(10px);
      opacity: 0;
    }
  }
  @keyframes mainCharToTop {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  width: 90%;
  height: inherit;
  border-radius: 1rem;
  box-shadow: 0 14px 12px 0 rgba(1, 1, 1, 0.13);
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;
  text-align: center;
  .header {
    width: 100%;
  }
  .location {
    width: 60%;
    height: inherit;
    border-radius: 0.5rem;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
    background-color: rgba(255, 255, 255);
    padding: 0.5rem;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: x-large;
    word-break: keep-all;
  }
  .image {
    margin-bottom: 1rem;
  }
  .image img {
    position: relative;
    animation: mainCharToTop 1s ease-out;
    animation-iteration-count: 1;
  }
  .text {
    font-size: inherit;
  }
  .text span {
    word-break: keep-all;
    line-height: 150%;
    display: block;
  }
  .modal-btn {
    margin: 2rem 0;
  }
  .modal-btn > button > img {
    display: inline-block;
    vertical-align: sub;
    margin: 1rem 0.8rem 0 0.8rem;
    width: 160px;
  }
  .modal-btn #left {
    margin-right: 0.5rem;
    display: inline-block;
    animation: arrowToRight 1s linear infinite;
  }
  .modal-btn #right {
    margin-left: 0.5rem;
    display: inline-block;
    animation: arrowToLeft 1s linear infinite;
  }
  .modal-btn span img {
    width: 15px;
  }
  #triangle {
  }
`;

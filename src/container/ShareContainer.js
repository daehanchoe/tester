import React from "react";
import KakaoShareBtn from "../component/result/KakaoShareBtn";
import TweetShareBtn from "../component/result/TweetShareBtn";
import CopyLinkBtn from "../component/result/CopyLinkBtn";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/icons/profile_logo.svg";
import results from "../data/results.json";

export default function ShareContainer({ char, tag }) {
  const location = results[char][tag].location;
  return (
    <StyledShareIcon>
      <p>공유하기</p>
      <div className="share-btn">
        <KakaoShareBtn character={char} tag={tag} location={location} />
        <TweetShareBtn characater={char} tag={tag} location={location} />
        <CopyLinkBtn characater={char} tag={tag} />
      </div>
      <div className="again-btn">
        <Link to="/">
          <button>다시하기</button>
        </Link>
      </div>
      <div className="logo">
        <img src={logo} alt="alt" />
      </div>
    </StyledShareIcon>
  );
}

const StyledShareIcon = styled.div`
  width: 100%;
  p {
    text-align: center;
    color: #fff;
    margin: 1.5rem 0;
    display: block;
    letter-spacing: 10px;
  }
  .share-btn {
    width: 90%;
    height: inherit;
    display: flex;
    margin: 0 auto;
    justify-content: space-evenly;
  }
  .again-btn {
    width: 90%;
    margin: 0 auto;
    width: 90%;
    padding: 1.5rem 0;
  }
  .again-btn button {
    box-shadow: 0 14px 12px 0 rgba(1, 1, 1, 0.13);
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 2.5rem;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    letter-spacing: 10px;
  }
  .logo img {
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  img {
    width: 60px;
    height: 60px;
  }
`;

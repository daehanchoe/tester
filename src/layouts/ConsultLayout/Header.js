import React from "react";
import styled from "styled-components";
import * as context from "../../QuestionContext";
import { types } from "../../setDate";
import back_icon from "../../assets/icons/back_icon.svg";
import profile_logo from "../../assets/images/name_pic.png";
import logo from "../../assets/images/logo2x.png";
function Header() {
  let totalCount = context.useTotalCount();
  const id = totalCount - 1;
  const setTotalCount = context.useSetTotalCount();
  const questionCount = context.useQuestionCount();
  const setQuestionCount = context.useSetQuestionCount();
  const result = context.useResultState();

  function setReusultAndDecreaseId() {
    if (id > 0) {
      setTotalCount(totalCount - 1);
      // TOKNOW 이렇게 해야 하는 이유??
      totalCount = totalCount - 1;
      if (types[id - 1] === ("question" || "tag")) {
        setQuestionCount(questionCount - 1);
        result.splice(result.indexOf(result[questionCount - 1]), 1);
      }
    }
  }

  return (
    <HeaderComp>
      <div className="header first-header">
        <div className="icon-div">
          {/* <button> */}
          <button onClick={() => setReusultAndDecreaseId()}>
            <img className="icon" src={back_icon} alt="icon" />
          </button>
        </div>
        <div>
          <img src={logo} alt="alt" style={{ width: "211px" }} />
        </div>
        <div style={{ width: "30px" }}>
          {/* <Link to="/drawer">
            <button>
              <img className="icon" src={drawer_icon} alt="icon" />
            </button>
          </Link> */}
        </div>
      </div>
      <hr />
      <div className="header second-header">
        <span>
          <img className="icon" src={profile_logo} alt="icon" />
        </span>
        <p>tripsoda_tour</p>
      </div>
    </HeaderComp>
  );
}

// export default React.memo(Header);
export default Header;

const HeaderComp = styled.header`
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 7px -5px;
  z-index: 1000;
  .icon {
    width: 30px;
    height: unset;
  }
  .header {
    padding: 0 1em;
  }
  .first-header {
    height: 4.2em;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .icon-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .second-header {
    height: 4.2em;
    display: table;
    /* justify-content: flex-start;
    align-content: center; */
  }
  .second-header > span {
    width: 45px;
    height: 45px;
    display: table-cell;
    vertical-align: middle;
  }
  .second-header img {
    width: 45px;
    height: 45px;
    border: 1px solid #d8d8d8;
    border-radius: 50%;
  }
  .second-header > p {
    padding-left: 15px;
    display: table-cell;
    vertical-align: middle;
  }
  background: #fff;
  width: 100%;
  max-width: 500px;
  position: fixed;
`;

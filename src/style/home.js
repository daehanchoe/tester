import styled from "styled-components";
const HomeStyle = styled.div`
  .home_graph {
    margin: 0 auto;
    width: 90%;
    display: flex;
  }
  .home_graph:after {
    content: "";
    padding-bottom: 100%;
  }

  .home_graph div {
    width: 100%;
    height: 100%;
  }

  .home_title {
    width: 80%;
    margin: 0 auto;
  }
  .btn_group {
    width: 100%;
  }
  .btn_div {
    width: 100%;
    margin-top: 1rem;
  }
  .btn_div button {
    cursor: pointer;
    height: 3em;
    width: 80%;
    border: 0px;
    border-radius: 2em;
    background-color: rgb(255, 255, 255);
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 5px -5px;
    /* box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 5px 0px; */
    margin: 0 auto;
  }
  text-align: center;
  align-content: space-around;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: #ee7165;
`;

export default HomeStyle;

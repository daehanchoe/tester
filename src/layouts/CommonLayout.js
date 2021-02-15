import React from "react";
import styled from "styled-components";

const StyledCommon = styled.div`
  /* color: ${(props) => props.color || "white"}; */
  /* background: ${(props) => props.background || "black"}; */
  height: 100%;
  display: flex;
  width: 100%;
  /* padding: 2em; */
  flex-direction: column;
  -webkit-box-align: center;
  align-content: center;
  background-color: white;
  /* justify-content: space-around; */
`;

export default function CommonLayout({ children, color, background }) {
  return (
    <StyledCommon color={color} background={background}>
      {children}
    </StyledCommon>
  );
}

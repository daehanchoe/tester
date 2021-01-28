import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Question({history, location}) {
    
    const [resultArray, setResult] = useState(location.state.list.concat());
    let cnt = 0;
    
    let q1 = 0;
    let q2 = 0;
    let q3 = 0;
    let q4 = 0;
    let q5 = 0;
    let q6 = 0;
    let q7 = 0;
    let q8 = 0;
    let q9 = 0;
    let q10 = 0;
    let q11 = 0;
    let q12 = 0;
    let q13 = 0;
    let q14 = 0;
    let q15 = 0;

    for( let num of location.state.list){
        if(cnt === 0){
            q1 = num;
        }
        if(cnt === 1){
            q2 = num;
        }
        if(cnt === 2){
            q3 = num;
        }
        if(cnt ===3 ){
            q4 = num;
        }
        if(cnt === 4){
            q5 = num;
        }
        if(cnt === 5){
            q6 = num;
        }
        if(cnt === 6){
            q7 = num;
        }
        if(cnt === 7){
            q8 = num;
        }
        if(cnt === 8){
            q9 = num;
        }
        if(cnt === 9){
            q10 = num;
        }
        if(cnt === 10){
            q11 = num;
        }
        if(cnt === 11){
            q12 = num;
        }
        if(cnt === 12){
            q13 = num;
        }
        if(cnt === 13){
            q14 = num;
        }
        cnt++;
    }

    function handleClick1() {

        resultArray[cnt] = "1";
        q15 = 1;
        save_result();
    }

    function handleClick2() {

        resultArray[cnt] = "2";
        q15 = 2;
        save_result();
    }

    function handleClick3() {

        resultArray[cnt] = "3";
        q15 = 3;
        save_result();
    }

    function handleClick4() {

        resultArray[cnt] = "4";
        q15 = 4;
        save_result();
    }

    function handleClick5() {

        resultArray[cnt] = "5";
        q15 = 5;
        save_result();
    }

    function handleClick6() {
        
        resultArray[cnt] = "6";
        q15 = 6;
        save_result();  
    }

    function save_result() {
        let tag = "tag";
        let character = "Willy";
        let open =3;
        let extrovert = 2;
        axios.get("save_result", {params : {resultArray,tag ,character,open,extrovert}})
      .then(res => {
         
            console.log("in!")

      })
      .catch(res => {console.log("ERR");});
        
    history.push({
        pathname: '/result',
        state: { list: resultArray }
    });

    };

    return (
        <div>
            <div> 관심사 태그를 선택해 주세요!</div>
            <QuestionStyled>
                <button onClick={handleClick1}>#액티비티</button>
                <button onClick={handleClick2}>#쇼핑</button>
                <button onClick={handleClick3}>#맛집</button>
                <button onClick={handleClick4}>#문호/예술</button>
                <button onClick={handleClick5}>#파티</button>
                <button onClick={handleClick6}>#자연</button>
            </QuestionStyled>
        </div>
        
    )
}

var QuestionStyled = styled.div`

    button {
        width: 100px;
        height: 107px;
        background: #2f3438;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }
`;
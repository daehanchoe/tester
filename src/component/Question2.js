import React, { useState } from 'react';
import styled from 'styled-components';
import answer from '../data/answer2.json';

export default function Question({ title, count, index, onClick }) {

    const list = answer.answer;
    let answer1 = "";
    let answer2 = "";
    
    const questionList = list.map((data, index) => {
        
        answer1 = data[count][0]
        answer2 = data[count][1]
        
    });

    return (
        <QuestionStyled className={count === index ? 'active' : ''}> {/* 카운트와 인덱스가 같을 때 엑티브 클래스 추가. -> 액티브 클래스는 화면에 css를 보여주는 효과를 가진 클래스명*/}
            <h2 className="question-title">{title}</h2>
            <ul>
                <li onClick={() => onClick(index, 1)}>{answer1}</li>
                <li onClick={() => onClick(index, -1)}>{answer2}</li>
            </ul>
        </QuestionStyled>
    )
}

var QuestionStyled = styled.div`
    display: none;
    opacity: 0;
    transition: opacity 500ms;

    .question-title {
        color: #222;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 100px;
        height: 40px;
    }

    &.active {
        display: block;
        opacity: 1;
    }

    li {
        width: 100%;
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

    li:first-child {
        margin-bottom: 20px;
    }

    li:active {
        background: #35c5f0;
    }
`;
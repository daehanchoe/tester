import React from 'react';
import styled from 'styled-components';

export default function Question() {

    return (
        <QuestionStyled>
                <li>1</li>
                <li>2</li>
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
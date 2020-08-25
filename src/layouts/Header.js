import React from 'react';
import styled from 'styled-components';

export default function Header(prop) {
    const total = prop.total;
    const count = prop.count;

    return (
        <HeaderComp>
            <p className="current-question"><span>Q</span><span>{count}</span></p>
            <span className="total-question">{count}/{total}</span>
        </HeaderComp>
    );
}

const HeaderComp = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    .current-question span {
        float: left;
        color: #35c5f0;
        font-weight: bold;
    }

    .current-question span:first-child {
        font-size: 30px;
    }

    .current-question span:last-child {
        font-size: 29px;
        margin-top: 2px;
        margin-left: 4px;
    }

    .total-question {
        height: 31px;
        width: 71px;
        border-radius: 17px;
        background: #eaebef;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #222;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: 3px;
        padding-left: 7px;
    }
`;

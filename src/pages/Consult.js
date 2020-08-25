import React, { useState } from 'react';
import data from '../data/data.json';
import styled from 'styled-components';
import Question from '../component/Question'; 
import Header from '../layouts/Header';
import axios from 'axios';

import logo from '../assets/images/tripsoda_icon.png'

export default function Consult({ history }) {
    const [result, setResult] = useState([]);
    const [count, setCount] = useState(1);
    const list = data.list;
    const questionList = list.map((data, index) => {
        return (
            <Question key={index} onClick={handleClick} title={data} index={index + 1} count={count} />            
        );
    });

    function handleClick(i, r) {
        result[i - 1] = r;
        setCount(count + 1);

        if (list.length === i) {

            axios.get('/getData').then(res =>{
                console.log(res.data)
            });

            // history.push({
            //     pathname: '/result',
            //     state: { list: result }
            // });
        }
    }

    return (
        <ConsultStyled>
            <Header count={count} total={list.length} />
            <div className="question-container">
                {questionList}
            </div>
            <div className="logo">
                <img src={logo}/>
            </div>
        </ConsultStyled>
    )
};

const ConsultStyled = styled.div`
    max-width: 752px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    
    .question-container {
        margin-top: 100px;
    }

    .logo {
        display: flex;
        justify-content: center;
        padding-top: 30px;
    }
`;